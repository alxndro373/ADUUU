import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'
import Table from '../components/Table.jsx'
import { useState } from 'react'
import {useViaje} from '../../hooks/useViaje.js'


export const Viajes = () => {
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    const {viajes, fetchViajes,handleCreateViaje, handleDeleteViaje, handleUpdateViaje} = useViaje()
    
    let fields = {idViaje: null,Origen:"",Destino:"",idCamion:null,fecha:"",hora:""}
    let holders = {idViaje:null,Origen:"",Destino:"",idCamion:null,"AAAA-MM-DD":"","HH:MM:SS":""}
    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Viajes</h1>
            <div>
               <Foorm initialValues={fields} fields={fields} holders={holders} handleCreate={handleCreateViaje} fetch={fetchViajes} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Viajes'} onFetch={fetchViajes} initialValues={fields} cols={fields} holders={holders} values={viajes} onDelete={handleDeleteViaje} onUpdate={handleUpdateViaje}/> : null}       
        </>
    )
}