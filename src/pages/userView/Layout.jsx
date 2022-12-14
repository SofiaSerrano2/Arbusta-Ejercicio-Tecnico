import Header from "../../component/public/Header";
import Footer from "../../component/public/Footer";

const Layout = ({children}) =>{
    return(
    <main>
      <Header/>
        {children}
      <Footer/>
    </main>

    )
}

   


export default Layout;