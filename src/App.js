import { useDispatch } from "react-redux";
import UserView from "./pages/userView/UserView";
//Realizar un console.log() en cada item que debería navegar a una nueva pantalla.
import { Provider ,useSelector } from 'react-redux' ;

function App() {
  const dispatch = useDispatch()
  
  return (
      <>
        <UserView/>
      </>
    );
}

export default App;
