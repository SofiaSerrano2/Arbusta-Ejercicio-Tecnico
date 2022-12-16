import { useDispatch ,useSelector} from 'react-redux'
import { useEffect } from "react";
import userReducer,{initlUserDetail} from '../../reducer/userReducer'
import serviceUserDetail, { getserviceUserDetail } from '../../service/userDetail'
import UserDetail from "./UserDetail";
import Layout from "../../component/Layout";

const UserView = () =>{
  const user=useSelector(state => state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    getserviceUserDetail().then(user=>dispatch(initlUserDetail(user)))
  }, [])
    return(
    <Layout>
      <UserDetail userInfo={user}/>
    </Layout>
    )
}

   


export default UserView;