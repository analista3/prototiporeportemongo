import * as yup from 'yup'

export const NewUserValidations = yup.object({
  username: yup.string().required('Campo requerido'),
  password: yup.string().required('Campo requerido'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'No coincide con la contraseña').required('Campo requerido'),
  documentType: yup.number().required('Campo requerido'),
  name: yup.string().when('documentType', {
    is: (value) => value !== 3,
    then: yup.string().required('Campo requerido')
  }),
  lastName: yup.string().when('documentType', {
    is: (value) => value !== 3,
    then: yup.string().required('Campo requerido')
  }),
  company: yup.string().when('documentType', {
    is: 3,
    then: yup.string().required('Campo requerido')
  }),
  document: yup.number().typeError('Sólo se permiten números').required('Campo requerido'),
  occupation: yup.number().required('Campo requerido'),
  code: yup.number().required('Campo requerido'),
  mobile: yup.number().typeError('Sólo se permiten números').required('Campo requerido'),
  email: yup.string().email('Ingrese un correo electrónico válido').required('Campo requerido'),
  role: yup.string()
})
