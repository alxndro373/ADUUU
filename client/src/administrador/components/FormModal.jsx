import {Form, Formik} from 'formik'

const FormModal = ({initialValues, fields, holders, handleUpdate, onFetch}) => {
    let arrInitialValues = Object.keys(initialValues)
    let arrHolders = Object.keys(holders)
    const onUpdate = async (values) => {
        let id
        let res
        for(let key in values){
            if(key.startsWith("id")){
                ({[key]: id, ...res} = values)
                break
            }
        }
        await handleUpdate(id,res) 
        await onFetch()
        
    }
    return (
        <Formik
            initialValues={
                initialValues
            }
            onSubmit={async (values) => {
                try {
                    onUpdate(values)

                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({ handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                    {
                        Object.keys(fields).map((ele,key) => (
                            <div className='container' key={key}>
                                <label className='form-label'>{ele}</label>
                                <input className='form-control bg-light' type="text" name={arrInitialValues[key]} onChange={handleChange} placeholder={arrHolders[key]} />
                            </div>
                        ))
                        

                    }
                    <div className='grid text-center'>
                        <button className='m-3 btn btn-light' type='submit' >Actualizar</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormModal