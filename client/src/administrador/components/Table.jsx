import { useState } from "react"
import PopupModal from "./PopupModal"


const Table = ({title,initialValues,cols,holders,values, onDelete, onUpdate, onFetch}) => {


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const getIdName = (value) => {
        let id
        let res
        for(let key in value){
            if(key.startsWith("id")){
                ({[key]: id, ...res} = value)
                break
            }
        }
        return id
    }
    
    return (
        <div className="container">
        <h2 className="mt-4 mb-4 text-dark">{title}</h2>
        <div className="border">
            <table className="table">
                <thead>
                    
                    <tr className="table-light">
                           {
                            Object.keys(cols).map((key,index) => (
                                <th key={index}>{key}</th>
                            ))
                           }
                           <th>Eliminar</th>
                           <th>Actualizar</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        values.map((value,index) => (
                            <tr key={index++}>
                                {Object.keys(value).map((key,index) => (
                                    
                                    <td key={index}>{value[key]}</td>
                                ))}
                                <td><button onClick={() => onDelete(getIdName(value))} className="btn"><i className="bi bi-trash3-fill"></i></button></td>
                                <td><button onClick={() => handleShow()} className="btn"><i className="bi bi-pencil-square"></i></button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <PopupModal show={show} handleClose={handleClose} onFetch={onFetch} handleUpdate={onUpdate} initialValues={initialValues} fields={cols} holders={holders} />
    </div>
    )
}
export default Table