import {Form, Formik} from 'formik'


const Foorm = ({initialValues, fields, holders,handleCreate,fetch,action,saveAction,showAction}) => {
    let arrInitialValues = Object.keys(initialValues)
    let arrHolders = Object.keys(holders)
   
    return (
        <Formik
            initialValues={
                initialValues
            }
            onSubmit={async (values) => {
                try {
                    switch (action) {
                        case 'Guardar':
                            handleCreate(values)
                            break;
                        case 'Consultar':
                            fetch()
                            break;

                    }

                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({ handleChange, handleSubmit }) => (
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
                        <button className='m-3 btn btn-light' type='submit' onClick={() => saveAction()}>Guardar</button>
                        <button className='m-3 btn btn-light' type='submit' onClick={() => showAction()}>Consultar</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Foorm