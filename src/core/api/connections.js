const _server = 'https://localhost'

const defaultConnection = {
  // Server debe contener el link principal únicamente, es decir: http(s)://www.website.com o la ip del servidor
  server: _server,
  /* Port debe contener el puerto si es necesario, del sitio en el cual esta alojado el api, acompañado de dos puntos iniciales
  ** y un slash al final, es decir: :00000/, en caso de que este puerto no este, se debe dejar un string vacio, sin nulos
  ** Ni espacios, para asi evitar errores en la conexion al endpoint
  */
  port: ':44390/',
  /* Service contiene el servicio al cual se conectara al api, normalmente es 'api', este service tambien puede ser utilizado
  ** para dinamizar las diferentes rutas de un servicio, separandolas por medio de conexiones individuales,
  ** se recomienda que este atributo se utilice en rutas constantes, es decir, que se repita el nombre, pero cambie la ruta que la complementa
  ** en caso de no ser usado este atributo, se debera dejar como un string vacio, sin nulos ni espacios para evitar errores en la conexion del endpoint
  */
  service: 'api/',
  /* version es un atributo adicional si se requiere conectar a una version especifica de un servicio, este es el ultimo parametro que se
  ** muestra en la ruta, ya que este servicio de conexiones esta hecho a partir de un standar que se deja al final del archivo,
  ** en caso de no ser utilizado, dejar como un string vacio, sin espacios ni nulos, para asi evitar errores en la conexion al api o
  ** webservice
  */
  version: 'v1'
}

const worldApiConnection = {
  server: _server,
  port: ':44330/',
  service: 'api/',
  version: 'v1'
}

/* Cualquier conexion que se genere o se escriba dentro de este archivo, debera ser instanciada dentro del siguiente objecto,
** de lo contrario, no podra ser llamada de ninguna instancia del archivo api/index.js, ubicado en core/api
*/
export const connections = {
  defaultConnection,
  worldApiConnection
}

/* Estandar utilizado para la construccion de conexiones
** Http(s)://<IP O DIRECCION>:<PUERTO>/<SERVICIO O CONSTANTE>/<VERSION>/<RUTA FINAL>
** Cuando hablamos de ruta final se refiere al endpoint al cual se conectara para obtener o enviar los datos,
** Este se especifica es al instanciar el api, NO EN LAS CONEXIONES
*/
