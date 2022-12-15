
const Header=()=>{
    return(
      <header className="bg-blue_bg absolute z-10 inset-x-0 top-0 w-full flex justify-between items-center">
        <img className=" w-16 h-16 my-2" src='/assets/logo/logo_carrios_blue.png' alt="" />
        <nav className=" flex flex-wrap	w-full">
        {/* Va a recorrer un json con los nombres de la página y su respectiva url */}
          <button className='text-white'>Home</button>
          <button className='text-white'>Desafios</button>
          <button className='text-white'>Requisitos</button>
          <button className='text-white'>Beneficios</button>
          <button className='text-white'>Tienda</button>
        </nav>
      </header>
    )
   
}
export default Header;