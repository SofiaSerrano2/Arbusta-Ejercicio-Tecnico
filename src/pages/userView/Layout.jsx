import Header from "../../component/public/Header";
import Footer from "../../component/public/Footer";

const Layout = ({children}) =>{
    return(
    <>     
      <Header/>
        <main className="h-full w-full absolute z-0">
          {children}
        </main>
      <Footer/>
      </> 
    )
}

   


export default Layout;