import * as yup from 'yup';

export default yup.object({
  Username: yup.string().required('Ingrese su nombre de usuario'),
  Password: yup.string().required('Ingrese su contraseña')
});
