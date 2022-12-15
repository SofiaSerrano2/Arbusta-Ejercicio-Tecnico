import Header from "../../component/public/Header";
import Footer from "../../component/public/Footer";

const Layout = ({children}) =>{
    return(
    <>     
      <Header/>
        <main className="h-full w-full absolute z-0">
          <div className="my-24 w-full flex justify-center">
            {children}
          </div>
        </main>
      <Footer/>
      </> 
    )
}

   


export default Layout;