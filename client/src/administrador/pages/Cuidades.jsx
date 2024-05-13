import { useState} from 'react'
import { useCuidad } from '../../hooks/useCuidad.js'
import Table from '../components/Table.jsx'
import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'

export const Cuidades = () => {
    
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}

    const {cuidades, fetchCuidades, handleCreateCuidad,handleDeleteCuidad, handleUpdateCuidad} = useCuidad()    
    
    let initalValues = {idCiudad: null,estado: ""}
    let fields = {idCuidad: null, Estado:""}
    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor: "#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Ciudades</h1>
            <div>
                <Foorm initialValues={initalValues} fields={fields} holders={fields} handleCreate={handleCreateCuidad} fetch={fetchCuidades} action={action} saveAction={saveAction} showAction={showAction}
                    />
            </div>
        </div>
        
        {action != "" ? <Table title={'Lista de Ciudades'} onFetch={fetchCuidades} onUpdate={handleUpdateCuidad} initialValues={initalValues} cols={fields} holders={fields} values={cuidades} onDelete={handleDeleteCuidad}/> : null}       
        </>
    )
}