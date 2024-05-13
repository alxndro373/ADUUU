import axios from 'axios'

export const getAutobusesRequest = async () => await axios.get('http://localhost:4000/autobuses')

export const createAutobusRequest = async (autobus) => await axios.post('http://localhost:4000/autobus', autobus)

export const updateAutobusRequest = async (id,newFields) => await axios.put(`http://localhost:4000/autobus/${id}`,newFields)

export const deleteAutobusRequest = async (id) => await axios.delete(`http://localhost:4000/autobus/${id}`)
