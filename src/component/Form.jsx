import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'
import {editUserName} from '../reducer/userReducer'
import serviceUserDetail from '../service/userDetail'
import { useFormik } from 'formik';
import { getValidationSchema } from '../validationSchema/getValidationSchema';
import TextInput from './Inputs/TextInput'
//viendo si es mejor hacerlo Componente o ponerlo directamente en la página
//viendo 
const  Form=({title,children})=> {

  return ( 
      <>
      {/*Modificar propiedad sin  */}
        <h1>{title}</h1>
        <form action="" >
            {children}
            <button type="submit">add</button>
          </form>
        </>
     );
}

export default Form;