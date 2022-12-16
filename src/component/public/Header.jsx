
const Header=({arrayNavBar})=>{
    return(
      <header className="bg-blue_bg absolute z-10 inset-x-0 top-0 w-full flex justify-between items-center">
        <img className=" w-16 h-16 my-2" src='/assets/logo/logo_carrios_blue.png' alt="" />
        <nav className=" flex flex-wrap	w-full mx-10 justify-between">
        {/* Va a recorrer un json con los nombres de la página y su respectiva url */}
          {
           arrayNavBar!=null && 
           arrayNavBar.map((navBar)=>(
            <button  className='text-white' onClick={()=>{console.log(navBar.name)}}>{navBar.name}</button>
          ))
        }
        </nav>
      </header>
    )
   
}
export default Header;