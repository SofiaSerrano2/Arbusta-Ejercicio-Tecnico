import { useDispatch } from "react-redux";
import UserView from "./pages/userView/UserView";
//Realizar un console.log() en cada item que debería navegar a una nueva pantalla.
import { Provider ,useSelector } from 'react-redux' ;
import { useEffect } from "react";
import userReducer,{initlUserDetail} from './reducer/userReducer'
import serviceUserDetail from './service/userDetail'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    serviceUserDetail.getserviceUserDetail().then(user => dispatch(initlUserDetail(user)))
  }, [])
  return (
      <>
        <UserView/>
      </>
    );
}

export default App;
