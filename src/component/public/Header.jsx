
const Header=()=>{
    return(
      <header>
            <img src='/assets/logo/logo_carrios_blue.png' alt="" />
        <nav>
        {/* Va a recorrer un json con los nombres de la página y su respectiva url */}
          <p>Home</p>
          <p>Desafios</p>
          <p>Requisitos</p>
          <p>Beneficios</p>
          <p>Tienda</p>
        </nav>
      </header>
    )
   
}
export default Header;