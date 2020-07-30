import * as yup from 'yup'
import messages from './messages'

export const GeneralInfoUserValidations = yup.object({
  // Validaciones de información básica
  tipoDocumento: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.REQUIRED_FIELD),
  numeroDocumento: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.REQUIRED_FIELD),
  codigoVerificacion: yup.number().typeError(messages.ONLY_NUMBERS),
  primerNombre: yup.string().when('docType', { is: !3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  primerApellido: yup.string().when('docType', { is: !3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  razonSocial: yup.string().when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  // Validaciones representante legal de la empresa
  nameManager: yup.string().when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  lastNameManager: yup.string().when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  docTypeManager: yup.string().when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  occupation: yup.string().when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  phoneCodeManager: yup.number().typeError(messages.ONLY_NUMBERS).when('docType', { is: 3, then: yup.string().required(messages.REQUIRED_FIELD) }),
  // Validaciones de dirección
  addressType: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.REQUIRED_FIELD),
  idPaisPersona: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.ONLY_NUMBERS),
  idDepartamentoPersona: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.ONLY_NUMBERS),
  idCiudadPersona: yup.number().typeError(messages.ONLY_NUMBERS).required(messages.ONLY_NUMBERS),
  idTipoVia: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 1, then: yup.number().required(messages.ONLY_NUMBERS) }),
  numeroVia: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 1, then: yup.number().required(messages.ONLY_NUMBERS) }),
  apendiceVia: yup.string(),
  numeroCruce: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 1, then: yup.number().required(messages.ONLY_NUMBERS) }),
  apendiceCruce: yup.string(),
  metrosEsquina: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 1, then: yup.number().required(messages.ONLY_NUMBERS) }),
  adicional: yup.string(),
  longitud: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 2, then: yup.number().required(messages.REQUIRED_FIELD) }),
  latitud: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 2, then: yup.number().required(messages.REQUIRED_FIELD) }),
  norte: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  este: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  gradosLo: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  minutosLo: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  segundosLo: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  gradosLa: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  minutosLa: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  segundosLa: yup.number().typeError(messages.ONLY_NUMBERS).when('addressType', { is: 3, then: yup.number().required(messages.REQUIRED_FIELD) }),
  // Validaciones de Información de contacto
  codeContact: yup.number().typeError(messages.ONLY_NUMBERS),
  telefono: yup.number().typeError(messages.ONLY_NUMBERS),
  codeMobileContact: yup.number().typeError(messages.ONLY_NUMBERS),
  celular: yup.number().typeError(messages.ONLY_NUMBERS),
  email: yup.string().email(messages.INVALID_EMAIL_ADDRESS).required(messages.REQUIRED_FIELD),
  webSite: yup.string().url(messages.INVALID_URL),
  usuarioFacebook: yup.string().url(messages.INVALID_URL),
  whatsapp: yup.number().typeError(messages.ONLY_NUMBERS)
})
