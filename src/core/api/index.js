import { connections } from './connections'

const Iserver = connections.defaultConnection.server
const Iport = connections.defaultConnection.port
const Iservice = connections.defaultConnection.service
const Iversion = connections.defaultConnection.version

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

// Metodo get del archivo api.js
const get = ({
  route, // ruta a la cual se conectara
  header = defaultHeaders, // Headers por defecto
  connection = null, // String de conexion registrada en el archivo connections.js
  server = Iserver,
  port = Iport,
  service = Iservice,
  version = Iversion
}) => {
  if (connection) {
    server = connections[connection].server || Iserver
    port = connections[connection].port || Iport
    service = connections[connection].service || Iservice
    version = connections[connection].version || Iversion
  }

  return fetch((`${server}${port}${service}${version}${route}`), {
    headers: header
  }).then(res => res)
}

// Metodo post del archivo api.js
const post = ({
  data,
  headers = defaultHeaders,
  route,
  connection,
  server = Iserver,
  port = Iport,
  service = Iservice,
  version = Iversion
}) => {
  if (connection) {
    server = connections[connection].server || Iserver
    port = connections[connection].port || Iport
    service = connections[connection].service || Iservice
    version = connections[connection].version || Iversion
  }
  const response = fetch((`${server}${port}${service}${version}${route}`), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res)
  return response
}

export default {
  get,
  post
}
