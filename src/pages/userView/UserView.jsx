import { useDispatch ,useSelector} from 'react-redux'
import { useEffect } from "react";
import userReducer,{initlUserDetail} from '../../reducer/userReducer'

import serviceUserDetail from '../../service/userDetail'
import UserDetail from "./UserDetail";
import Layout from "../../component/Layout";

const UserView = () =>{
  const user=useSelector(state => state.user)
  const dispatch = useDispatch();

    return(
    <Layout>
      <UserDetail/>
    </Layout>
    )
}

   


export default UserView;