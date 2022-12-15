// Los datos de la página y los links se van a consumir desde un archivo json
import { useEffect,useState } from "react";
import serviceSocialMedia from '../../service/socialMedia'
import serviceNavbar from '../../service/navbar'

const  Footer = ()=> {
  const [arraySocialMedia,setArraySocialMedia]=useState();
  const [arrayNavBar,setarrayNavBar]=useState();

  useEffect(() => {
    serviceNavbar
    .getNavBar()
    .then(navBar=>setarrayNavBar(arrayNavBar))

    serviceSocialMedia
    .getSocialMedia()
    .then(socialMedia=>setArraySocialMedia(socialMedia))
  }, [])

  return(
    <footer className='bg-blue_bg absolute z-10 inset-x-0 bottom-0 flex justify-between items-center'>
      {/* Logo */}
      <img className="w-24 h-24 my-5 " src='/assets/logo/logo_carrios_blue.png' alt="" />
        {/* Pages */}
      <div className='flex flex-wrap justify-between w-96'>
        {/* <button className='text-white'>Home</button>
        <button className='text-white'>Desafios</button>
        <button className='text-white'>Requisitos</button>
        <button className='text-white'>Beneficios</button>
        <button className='text-white'>Tienda</button> */}
        {
           arrayNavBar!=null && 
           arrayNavBar.map((navBar,index)=>(
            <button key={index} className='text-white'>{navBar.name}</button>
          ))
        }
      </div>
      {/* Links */}
      <div className="white">
        <p>Terminos y condiciones</p>
      </div>
        
        {/* Social media */}
    <div>
      <div className="flex justify-around w-35">
        {/* <img src='/assets/icons/socialMedia/icon_instagram_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_twitter_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_whatsapp_white.svg' alt='' />       
        <img src='/assets/icons/socialMedia/icon_youtube_white.svg' alt='' />        */}
        {
          arraySocialMedia !=null && 
          arraySocialMedia.map((socialmedia)=>(
            <img key={socialmedia.id} src={`/assets/icons/socialMedia/${socialmedia.img}`} alt={socialmedia.name} />
          ))
            
        }
      </div>
    </div>
  </footer>
  )

}

export default Footer;