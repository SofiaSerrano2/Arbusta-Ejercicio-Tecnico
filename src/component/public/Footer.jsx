// Los datos de la página y los links se van a consumir desde un archivo json
const  Footer = ()=> {
  return(
    <footer className=''>
      {/* Logo */}
      <img src='/assets/logo/logo_carrios_blue.png' alt="" />
        {/* Pages */}
      <div className=''>
        <p>Home</p>
        <p>Desafios</p>
        <p>Requisitos</p>
        <p>Beneficios</p>
        <p>Tienda</p>
      </div>
      {/* Links */}
      <div>
        <p>Terminos y condiciones</p>
      </div>
        
        {/* Social media */}
    <div>
      <div>
        <img src='' alt='' />       
      </div>
    </div>
  </footer>
  )

}

export default Footer;