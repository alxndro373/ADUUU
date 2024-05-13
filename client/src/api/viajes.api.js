import axios from 'axios'

export const getViajesRequest = async () => await axios.get('http://localhost:4000/viajes')

export const createViajeRequest = async (viajes) => await axios.post('http://localhost:4000/viaje', viajes)

export const updateViajeRequest = async (id,newFields) => await axios.put(`http://localhost:4000/viaje/${id}`,newFields)

export const deleteViajeRequest = async (id) => await axios.delete(`http://localhost:4000/viaje/${id}`)
