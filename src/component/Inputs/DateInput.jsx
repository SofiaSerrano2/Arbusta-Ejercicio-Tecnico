const DateInput =({label,errorPost = null,error=null,touched,...props})=>{
  console.log(props.values);
  return(
    <div className='flex flex-col gap-1 tablet:grow tablet:max-w-[320px] mb-8'>
      <label htmlFor="">
        {label}
      </label>
      <input
        className={`w-full tablet:max-w-[320px] p-2 h-10 rounded-lg border-2 ${
          (error || errorPost) && touched ? 'border-red-500' : ''
        } ${!error && touched ? 'bg-inputbackground' : ''} focus:outline-green`}
        onChange={props.onChange}
        defaultValue={props.values}
        type='date'
        pattern="\d{4}-\d{2}-\d{2}"
        // eslint-disable-next-line react/jsx-props-no-spreading
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
      ) : null}    </div>
  )
}

export default DateInput;