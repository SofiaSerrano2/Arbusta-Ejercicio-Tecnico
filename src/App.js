import UserView from "./pages/userView/UserView";
//Realizar un console.log() en cada item que debería navegar a una nueva pantalla.
import { useEffect } from "react";
import serviceUserDetail from './service/userDetail'
function App() {
  // }, [])
  return (
      <>
        <UserView/>
      </>
    );
}

export default App;
