import axios from 'axios'

export const getCuidadesRequest = async () => await axios.get('http://localhost:4000/ciudades')

export const createCuidadRequest = async (cuidad) => await axios.post('http://localhost:4000/ciudad', cuidad)

export const updateCuidadRequest = async (id,newFields) => await axios.put(`http://localhost:4000/ciudad/${id}`,newFields)


export const deleteCuidadRequest = async (id) => await axios.delete(`http://localhost:4000/ciudad/${id}`)
