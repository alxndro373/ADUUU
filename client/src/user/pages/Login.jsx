import { Link,useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import Nav from '../components/Navbar.jsx'
import logo from '../assets/ADU.png'
import { useUsuario } from '../../hooks/useUsuario.js'
import { useAuth } from '../../auth/AuthProvider.jsx'

export const Login = () => {
    const {handleGetPasswordAndName} = useUsuario()
    const {changeAuthenticated,getName} = useAuth()
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div style={{fontFamily: "Oswal, sans-serif"}}>
                <div className='container position-relative'>
                    <img src={logo} alt="" style={{ width: "250px", height: "60px", objectFit: "cover", position: "absolute", top: "3px", left: "50%", transform: "translateX(-50%)", marginTop:"9%"}} />    
                </div>
                <div className='login template d-flex justify-content-center align-items-center vh-100'>
                    <div className='50-w p-5 rounded ' style={{background: "linear-gradient(#cdf6f2df, #9ed1d6)"}}>
                        <h3 className='text-center mb-4 fw-bold'>Iniciar Sesión</h3>
                        <Formik
                            initialValues={{ correo: "", contraseña: "" }}
                            onSubmit={async(values) => {
                                try {
                                    const res = await handleGetPasswordAndName(values.correo)
                                    const contra = res.data.contraseña
                                    if(contra === values.contraseña){
                                        changeAuthenticated(true)
                                        getName(res.data.nombre)
                                        res.data.nombre === 'administrador' ? navigate("/administrador") : navigate("/")
                                    }else alert("Correo o Contraseña incorrectas")
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                        >
                            {({ handleChange, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label className='form-label'>Correo Electronico</label>
                                        <input className='form-control' type="text" name='correo' placeholder='Correo Electronico' onChange={handleChange} style={{ background: "linear-gradient(#ffffff, #9ed1d6)", borderRadius: "10px" }} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Contraseña</label>
                                        <input className='form-control' type="password" name='contraseña' placeholder='contraseña' onChange={handleChange} style={{ background: "linear-gradient(#ffffff, #9ed1d6)", borderRadius: "10px" }} />
                                    </div>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn fw-bold' style={{ background: "linear-gradient(#94d6c1, #9ed1d6)", border: "none", maxWidth: "40%", marginLeft: "27%" }}>Ingresar</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <p className='text-right mb-1 mt-3 fw-normal'>
                            ¿No tienes una cuenta? <Link className='text-body fw-bold' style={{ textDecoration: "none" }} to="/Register">Registrate</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}