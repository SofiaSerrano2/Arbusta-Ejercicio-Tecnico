import { useContext, useEffect } from "react";
import { useFormik } from 'formik';
import { useDispatch ,useSelector} from 'react-redux'

import serviceUserDetail from "../../service/userDetail"
// import {editUserName,editUserSurname,editUsertBirthDate,editUserEmail,editUserDni,initlUserDetail} from '../../reducer/userReducer'
import { getValidationSchema } from '../../validationSchema/getValidationSchema';
import Form from "../../component/Form";
import TextInput from '../../component/Inputs/TextInput';
import DateInput from "../../component/Inputs/DateInput";
import SelectedInput from "../../component/Inputs/SelectedInput";
import UserContext from "../../context/UserContext";
//me conviene hacer que se ejecute la función cuando salgo del input con el handleBlur
//problemas para guardar fecha en el input
const UserDetailForm = () =>{
  const {userDetail,setUserdetail}=useContext(UserContext);

  useEffect(() => {
    // serviceUserDetail.getserviceUserDetail().then(user=>setUserdetail(user));

  }, [])

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue
  } = useFormik({
    initialValues: {
      name:userDetail.name,
      surname:'',
      birthDate:'2000-01-02',
      email:'',
      dni:''
    },
    validationSchema: getValidationSchema(),
  })

  //poner funciones en carpeta aparte 

    return(
    <>
      <Form title={'Datos personales'}>
      <TextInput
          label='Nombre'
          name='name'
          onChange={(e)=>{
            setFieldValue('name',e.target.value)
            }
          }
          onBlur={handleBlur}
          touched={touched.name}
          values={values.name}
          error={errors.name}
          required={true}
          />
          <TextInput
          label='Apellido'
          name='surname'
          onChange={(e)=>{
            setFieldValue('surname',e.target.value)
            }
          }          
          onBlur={handleBlur}
          touched={touched.surname}
          values={values.surname}
          error={errors.surname}
          required={true}

          />
          <DateInput 
          label='Fecha de Nacimiento'
          name='birthDate'
          onBlur={handleBlur}
          onChange={(e)=>{
            setFieldValue('birthDate',e.target.value)
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
            }
          }             
          onBlur={handleBlur}
          touched={touched.email}
          values={values.email}
          error={errors.email}
          required={true}

          />
          <TextInput
          label='DNI'
          name='dni'
          onChange={(e)=>{
            setFieldValue('dni',e.target.value)
            }
          }             
          onBlur={handleBlur}
          touched={touched.dni}
          values={values.dni}
          error={errors.dni}
          required={true}
          />
          <SelectedInput
            label='licencia'
            name='licencia'
            onChange={handleChange}
            onBlur={handleBlur}
          />
      </Form>
    </>
    )
}

export default UserDetailForm;