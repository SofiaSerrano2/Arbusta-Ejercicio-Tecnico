import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../public/Header";
import Footer from "../public/Footer";

import serviceSocialMedia from '../../service/socialMedia'
import serviceNavbar from '../../service/navbar'
import { getserviceUserDetail } from "../../service/userDetail";
import { initlUserDetail } from "../../reducer/userReducer";

const Layout = ({children}) =>{
  const dispatch = useDispatch()

  const [arraySocialMedia,setArraySocialMedia]=useState();
  const [arrayNavBar,setarrayNavBar]=useState();
  const user=useSelector(state => state.user)

  useEffect(() => {
    serviceNavbar
    .getNavBar()
    .then(navBar=>setarrayNavBar(navBar))

    serviceSocialMedia
    .getSocialMedia()
    .then(socialMedia=>setArraySocialMedia(socialMedia))
      getserviceUserDetail().then(user=>dispatch(initlUserDetail(user)))

  }, [])
    return(
    <>     
      <Header arrayNavBar={arrayNavBar} data={user}/>
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