const SelectedInput = ({label,...props})=>{
  return(
    <div className='flex flex-col gap-1 tablet:grow tablet:max-w-[320px] mb-8'>
      <div className="flex">
        <label htmlFor={props.name} className='text-sm'>
          {label}
        </label>
      </div>
    
    <select name="select" className="w-full tablet:max-w-[320px] p-2 h-10 rounded-lg border-2">
      <option value={true}>Si</option>
      <option defaultValue={false} selected>No</option>
    </select>
    </div>
  )
}

export default SelectedInput;