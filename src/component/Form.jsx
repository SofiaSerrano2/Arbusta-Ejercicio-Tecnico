import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'
import {editUserName} from '../reducer/userReducer'
import serviceUserDetail from '../service/userDetail'
import { useFormik } from 'formik';
import { getValidationSchema } from '../validationSchema/getValidationSchema';
import TextInput from './Inputs/TextInput'
//viendo si me conviene hacerlo Componente o ponerlo directamente en la página
const  Form=()=> {
  const dispatch = useDispatch()
  const user=useSelector(state => state.user)

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched
  } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: getValidationSchema()
  })

  const editName = (event) => {
    event.preventDefault();
    const content = event.target.name.value;
    dispatch(editUserName(content));
  }

  return ( 
      <>
      {/*Modificar propiedad sin  */}
        <h1>Datos Personales</h1>
        <form action=""  onSubmit={editName}>
        <TextInput
          label='Nombre'
          name='name'
          placeholder={user.name}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.name}
          values={values.name}
          error={errors.name}
          />
          <TextInput
          label='Apellido'
          name='surname'
          placeholder={user.surName}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.surName}
          values={values.surName}
          error={errors.surName}
          />

            <button type="submit">add</button>
          </form>
        </>
     );
}

export default Form;