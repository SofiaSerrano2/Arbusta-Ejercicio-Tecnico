// Los datos de la página y los links se van a consumir desde un archivo json
const  Footer = ()=> {
  return(
    <footer className='bg-blue_bg absolute z-10 inset-x-0 bottom-0 flex justify-between items-center'>
      {/* Logo */}
      <img className="w-24 h-24 my-5 " src='/assets/logo/logo_carrios_blue.png' alt="" />
        {/* Pages */}
      <div className='flex flex-wrap justify-center	'>
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
      <div className="flex justify-around w-35">
        <img src='/assets/icons/socialMedia/icon_instagram_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_twitter_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_whatsapp_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_youtube_white.svg' alt='' />       

      </div>
    </div>
  </footer>
  )

}

export default Footer;