import { useState } from "react"
import { useUsuario } from "../../hooks/useUsuario"
import Nav from '../components/Navbar.jsx'
import Table from '../components/Table.jsx'
import Foorm from '../components/Form.jsx'

export const Usuario = () => {

    const {usuarios, fetchUsuarios, handleCreateUsuario, handleDeleteUsuario, handleUpdateUsuario} = useUsuario()
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    let initalValues = {
        idUsuario: null,
        nombre: "",
        correo: "",
        numeroCelular: "",
        contraseña: ""
    }
    let fields = {idUsuario:null,Nombre:"",Correo:"","Numero de Celular":"",contraseña:""}

    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Usuarios</h1>
            <div>
               <Foorm initialValues={initalValues} fields={fields} holders={fields} handleCreate={handleCreateUsuario} fetch={fetchUsuarios} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Usuarios'} initialValues={initalValues} cols={fields} holders={fields} values={usuarios} onFetch={fetchUsuarios} onDelete={handleDeleteUsuario} onUpdate={handleUpdateUsuario}/> : null}       
        </>
    )
}