
function TextInput({
  errorPost = null,
  error=null,
  label,
  touched,
  required,
  ...props
}) {
  return (
    <div className='flex flex-col gap-1 tablet:grow tablet:max-w-[320px] mb-2'>
      <div className="flex">
        <label htmlFor={props.name} className='text-sm'>
          {label}
        </label>
        {required===true
         && <p className="text-red-500"> *</p>
        }
      </div>
      <input
        className={`w-full tablet:max-w-[320px] p-2 h-10 rounded-lg border-2 ${
          (error || errorPost) && touched ? 'border-red-500' : ''
        } ${!error && touched ? 'bg-inputbackground' : ''} focus:outline-green`}
        onChange={props.onChange}
        defaultValue={props.values}
        {...props}
      />
      {error && touched ? (
        <div className='text-red-500 flex mt-2'>
          <p className='ml-2'>{error}</p>
        </div>
      ) : null}
      {errorPost !== null ? (
        <div className='text-red-500 flex mt-2'>
          <p className='ml-2'>{errorPost}</p>
        </div>
      ) : null}
    </div>
  );
}

export default TextInput;