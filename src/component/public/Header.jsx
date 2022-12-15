
const Header=()=>{
    return(
      <header className="flex">
            <img className="w-20 h-20" src='/assets/logo/logo_carrios_blue.png' alt="" />
        <nav className="bg-blue flex">
        {/* Va a recorrer un json con los nombres de la página y su respectiva url */}
          <button className='text-white'>Home</button>
          <button>Desafios</button>
          <button>Requisitos</button>
          <button>Beneficios</button>
          <button>Tienda</button>
        </nav>
      </header>
    )
   
}
export default Header;