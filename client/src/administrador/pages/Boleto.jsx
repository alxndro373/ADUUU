import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'
import Table from '../components/Table.jsx'
import { useState } from 'react'
import {useBoleto} from '../../hooks/useBoleto.js'

export const Boletos = () => {
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    const {boletos, fetchBoletos,handleCreateBoleto, handleDeleteBoleto, handleUpdateBoleto} = useBoleto()
    
    let initialValues = {idBoleto:null,idUsuario:null,idViaje:null,asiento:0,fecha:"",hora:"",precio:0.0}
    let fields = {idBoleto:null,idUsuario:null,idViaje:null,"Número de asiento":0,fecha:"",hora:"",precio:0.0}
    let holders = {idBoleto:null,idUsuario:null,idViaje:null,"Número de asiento":0,"AAA-MM-DD":"","HH:MM:SS":"",precio:0.0}
    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Boletos</h1>
            <div>
               <Foorm initialValues={initialValues} fields={fields} holders={holders} handleCreate={handleCreateBoleto} fetch={fetchBoletos} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Boletos'} onFetch={fetchBoletos} initialValues={initialValues} cols={fields} holders={holders} values={boletos} onDelete={handleDeleteBoleto} onUpdate={handleUpdateBoleto}/> : null}       
        </>
    )
}