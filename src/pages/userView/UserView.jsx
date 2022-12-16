import { useEffect,useContext } from "react";

import UserDetailForm from "./UserDetailForm";
import Layout from "../../component/Layout";
import Context, { UserContext, UserContextProvider } from "../../context/UserContext";
const UserView = () =>{

    return(
      <UserContextProvider>
        <Layout>
        <UserDetailForm/>
        </Layout>
      </UserContextProvider>
    
    )
}

export default UserView;