import axios from 'axios'

export const getUsuariosRequest = async () => await axios.get('http://localhost:4000/Usuarios')

export const createUsuarioRequest = async (Usuario) => await axios.post('http://localhost:4000/Usuario', Usuario)

export const updateUsuarioRequest = async (id,newFields) => await axios.put(`http://localhost:4000/Usuario/${id}`,newFields)

export const deleteUsuarioRequest = async (id) => await axios.delete(`http://localhost:4000/Usuario/${id}`)

export const getPasswordAndNameRequest = async (correo) => await axios.get(`http://localhost:4000/usuario/correo/${correo}`)