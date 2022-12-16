import { useEffect } from "react";
import { useFormik } from 'formik';
import { useDispatch ,useSelector} from 'react-redux'

import serviceUserDetail from "../../service/userDetail"
import {editUserName,editUserSurname,editUsertBirthDate,editUserEmail,editUserDni} from '../../reducer/userReducer'
import { getValidationSchema } from '../../validationSchema/getValidationSchema';
import Form from "../../component/Form";
import TextInput from '../../component/Inputs/TextInput';
import DateInput from "../../component/Inputs/DateInput";
//me conviene hacer que se ejecute la función cuando salgo del input con el handleBlur
//problemas para guardar fecha en el input
const UserDetail = () =>{
  const dispatch = useDispatch()
  
  const user=useSelector(state => state.user)

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue
  } = useFormik({
    initialValues: {
      name:user.name,
      surname:user.surname,
      birthDate:'2000-01-02',
      email:user.email,
      dni:user.dni
    },
    validationSchema: getValidationSchema(),
  })

  const editName = (input) => {
    dispatch(editUserName(input));
  }

  const editSurname = (input) => {
    dispatch(editUserSurname(input));
  }
 
    return(
    <>
      <Form title={'Datos personales'}>
      <TextInput
          label='Nombre'
          name='name'
          onChange={(e)=>{
            console.log(e.target.name.value)
            setFieldValue('name',e.target.value)
            editName(e.target.value)
            }
          }
          onBlur={handleBlur}
          touched={touched.name}
          values={values.name}
          error={errors.name}
          />
          <TextInput
          label='Apellido'
          name='surname'
          onChange={(e)=>{
            console.log(e.target.value)
            setFieldValue('surname',e.target.value)
            editSurname(e.target.value)
            }
          }          onBlur={handleBlur}
          touched={touched.surname}
          values={values.surname}
          error={errors.surname}
          />
          <DateInput 
          label='Fecha de Nacimiento'
          name='birthDate'
          onBlur={handleBlur}
          touched={touched.birthDate}
          values={values.birthDate}
          error={errors.birthDate}
          />
          <TextInput
          label='E-mail'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.email}
          values={values.email}
          error={errors.email}
          />
          <TextInput
          label='DNI'
          name='dni'
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.dni}
          values={values.dni}
          error={errors.dni}
          />
      </Form>
    </>
    )
}

export default UserDetail;