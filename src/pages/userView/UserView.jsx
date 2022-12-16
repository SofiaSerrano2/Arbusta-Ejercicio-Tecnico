
import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'
import {initlUserDetail} from '../../reducer/userReducer'
import serviceUserDetail from '../../service/userDetail'

import UserDetail from "./UserDetail";
import Layout from "../../component/Layout";

const UserView = () =>{
  const dispatch = useDispatch();
  const user=useSelector(state => state.user)
  
    useEffect(() => {
      serviceUserDetail.getserviceUserDetail().then(user => dispatch(initlUserDetail(user)))
    }, [])

    return(
      <Layout>
        <UserDetail/>
      </Layout>
    )
}


export default UserView;