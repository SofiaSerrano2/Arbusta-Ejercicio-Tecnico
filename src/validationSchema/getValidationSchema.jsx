import * as Yup from 'yup';
//npmbre
//apellido 
//fechaNacimiento
//mail
//dni
//tenes licencia de conducir
export const getValidationSchema = () => Yup.object().shape({
    name: Yup.string('Campo inválido')
    .min(2,'Entre 2 y 500 caracteres')
    .max(500,'')
    .required('Campo requerido'),
    surname: Yup.string('Campo inválido')
    .min(2,'Entre 2 y 500 caracteres')
    .max(500,'')
    .required('Campo requerido'),
    email:
})