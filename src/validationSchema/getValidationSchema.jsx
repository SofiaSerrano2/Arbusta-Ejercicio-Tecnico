import * as Yup from 'yup';
//Ver si se puede verificar que sea mayor de edad
const today = new Date();

export const getValidationSchema = () => Yup.object().shape({
    name: Yup.string('Campo inválido')
    .min(2,'Entre 2 y 500 caracteres')
    .max(500,'')
    .required('Campo requerido'),
    surname: Yup.string('Campo inválido')
    .min(2,'Entre 2 y 500 caracteres')
    .max(500,'')
    .required('Campo requerido'),
    email: Yup.string('Campo inválido')
    .email('Email inválido')
    .min(3,'Entre 3 y 500 caracteres')
    .max(500,'Entre 3 y 500 caracteres')
    .required('Campo requerido'),
    dni: Yup.string()
    .matches(/^[0-9]\d{7,50}$/, 'Sólo números entre 8 y 50 dígitos')
    .required('Campo requerido'),
    birthDate: Yup.date().nullable().min(new Date(1900, 0, 1),'La fecha de Nacimiento no puede ser menor de 1900').max(today,'Ingresar fecha de nacimiento valida'),
})