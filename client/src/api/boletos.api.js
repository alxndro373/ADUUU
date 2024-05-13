import axios from 'axios'

export const getBoletosRequest = async () => await axios.get('http://localhost:4000/boletos')

export const createBoletoRequest = async (boleto) => await axios.post('http://localhost:4000/boleto', boleto)

export const updateBoletoRequest = async (id,newFields) => await axios.put(`http://localhost:4000/boleto/${id}`,newFields)

export const deleteBoletoRequest = async (id) => await axios.delete(`http://localhost:4000/boleto/${id}`)