import { useEffect } from "react";
import { useFormik } from 'formik';
import { useDispatch ,useSelector} from 'react-redux'

import {getserviceUserDetail,putserviceUserDetail} from "../../service/userDetail"
import {editUserName,editUserSurname,editUsertBirthDate,editUserEmail,editUserDni,initlUserDetail} from '../../reducer/userReducer'
import { getValidationSchema } from '../../validationSchema/getValidationSchema';
import Form from "../../component/private/Form";
import TextInput from '../../component/Inputs/TextInput';
import DateInput from "../../component/Inputs/DateInput";
import SelectedInput from "../../component/Inputs/SelectedInput";
//me conviene hacer que se ejecute la función cuando salgo del input con el handleBlur
//problemas para guardar fecha en el input
const UserDetail = ({userInfo}) =>{
  const dispatch = useDispatch()
  
  const user=useSelector(state => state.user)

  // useEffect(() => {
  //     getserviceUserDetail().then(user=>dispatch(initlUserDetail(user)))
  // }, [])
  
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
      surname:userInfo.surname,
      birthDate:'2000-01-02',
      email:userInfo.email,
      dni:userInfo.dni,
      drivingLicense:false
    },
    validationSchema: getValidationSchema(),
  })

  //poner funciones en carpeta aparte 
  const editName = (input) => {
    dispatch(editUserName(input));
  }

  const editSurname = (input) => {
    dispatch(editUserSurname(input));
  }
  const edittBirthDate = (input) => {
    dispatch(editUsertBirthDate(input));
  }

  const editEmail = (input) => {
    dispatch(editUserEmail(input));
  }

  const editDni = (input) => {
    dispatch(editUserDni(input));
    putserviceUserDetail(user)
  }

    return(
    <>
      <Form title={'Datos personales'}>
      <TextInput
          label='Nombre'
          name='name'
          onChange={(e)=>{
            setFieldValue('name',e.target.value)
            editName(e.target.value)
            }
          }
          onBlur={handleBlur}
          touched={touched.name}
          values={user.name}
          error={errors.name}
          required={true}
          />
          <TextInput
          label='Apellido'
          name='surname'
          onChange={(e)=>{
            setFieldValue('surname',e.target.value)
            editSurname(e.target.value)
            }
          }          
          onBlur={handleBlur}
          touched={touched.surname}
          values={user.surname}
          error={errors.surname}
          required={true}

          />
          <DateInput 
          label='Fecha de Nacimiento'
          name='birthDate'
          onBlur={handleBlur}
          onChange={(e)=>{
            setFieldValue('birthDate',e.target.value)
            edittBirthDate(e.target.value)
            }
          }   
          touched={touched.birthDate}
          values={values.birthDate}
          error={errors.birthDate}
          required={true}

          />
          <TextInput
          label='E-mail'
          name='email'
          onChange={(e)=>{
            setFieldValue('email',e.target.value)
            editEmail(e.target.value)
            }
          }             
          onBlur={handleBlur}
          touched={touched.email}
          values={user.email}
          error={errors.email}
          required={true}

          />
          <TextInput
          label='DNI'
          name='dni'
          onChange={(e)=>{
            setFieldValue('dni',e.target.value)
            editDni(e.target.value)
            }
          }             
          onBlur={handleBlur}
          touched={touched.dni}
          values={user.dni}
          error={errors.dni}
          required={true}
          />
          <SelectedInput
            label='licencia'
            name='licencia'
            onChange={handleChange}
            onBlur={handleBlur}
            values={user.drivingLicense}

          />
      </Form>
    </>
    )
}

export default UserDetail;