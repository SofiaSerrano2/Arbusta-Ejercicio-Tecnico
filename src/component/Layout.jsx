import { useEffect,useState } from "react";

import Header from "./public/Header";
import Footer from "./public/Footer";

import serviceSocialMedia from '../service/socialMedia'
import serviceNavbar from '../service/navbar'

const Layout = ({children}) =>{
  const [arraySocialMedia,setArraySocialMedia]=useState();
  const [arrayNavBar,setarrayNavBar]=useState();

  useEffect(() => {
    serviceNavbar
    .getNavBar()
    .then(navBar=>setarrayNavBar(navBar))

    serviceSocialMedia
    .getSocialMedia()
    .then(socialMedia=>setArraySocialMedia(socialMedia))
  }, [])
    return(
    <>     
      <Header arrayNavBar={arrayNavBar}/>
        <main className="h-full w-full absolute z-0">
          <div className="my-24 w-full flex justify-center">
            {children}
          </div>
        </main>
      <Footer arrayNavBar={arrayNavBar} arraySocialMedia={arraySocialMedia}/>
      </> 
    )
}

   


export default Layout;