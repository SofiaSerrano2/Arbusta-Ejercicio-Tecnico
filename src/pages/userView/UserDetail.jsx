import { useEffect } from "react";
import { useFormik } from 'formik';
import { useDispatch ,useSelector} from 'react-redux'

import serviceUserDetail from "../../service/userDetail"
import {editUserName} from '../../reducer/userReducer'
import { getValidationSchema } from '../../validationSchema/getValidationSchema';
import Form from "../../component/Form";
import TextInput from '../../component/Inputs/TextInput';
import DateInput from "../../component/Inputs/DateInput";

const UserDetail = () =>{
  useEffect(() => {
    serviceUserDetail
    .getserviceUserDetail()
    .then(userDetail=>console.log(userDetail))
  }, [])
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
    return(
    <>
      <Form title={'Datos personales'}>
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
          placeholder={user.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.surname}
          values={values.surname}
          error={errors.surname}
          />
          <DateInput 
          label='Fecha de Nacimiento'
          name='birthDate'
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.birthDate}
          values={values.birthDate}
          error={errors.birthDate}
          />
          <TextInput
          label='E-mail'
          name='email'
          placeholder={user.email}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.email}
          values={values.email}
          error={errors.email}
          />
          <TextInput
          label='DNI'
          name='dni'
          placeholder={user.dni}
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