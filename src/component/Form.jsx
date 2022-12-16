import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'
import {editUserName} from '../reducer/userReducer'
import serviceUserDetail from '../service/userDetail'

//viendo si me conviene hacerlo Componente o ponerlo directamente en la página
const  Form=()=> {
  const dispatch = useDispatch()
  const user=useSelector(state => state.user)

  const editName = (event) => {
    event.preventDefault();
    const content = event.target.name.value;
    dispatch(editUserName(content));
  }
  
  return ( 
      <>
        <h1>Datos Personales</h1>
        <form action=""  onSubmit={editName}>
            <input name="name" type='text'/>
            <button type="submit">add</button>
          </form>
        </>
     );
}

export default Form;