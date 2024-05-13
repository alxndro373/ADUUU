import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { createUsuarioRequest } from '../../api/usuarios.api.js'
import Nav from '../components/Navbar.jsx'
import logo from '../assets/ADU.png'

export const Register = () => {

    return (
        <>
            <Nav />
            <div style={{ fontFamily: "Oswal, sans-serif" }}>
                <div className='container position-relative'>
                    <img src={logo} alt="" style={{ width: "250px", height: "60px", objectFit: "cover", position: "absolute", left: "50%", transform: "translateX(-50%)", marginTop: "3.5rem" }} />
                </div>
                <div className='login template d-flex justify-content-center align-items-center vh-100 ' style={{}}>
                    <div className='p-2 rounded ' style={{ background: "linear-gradient(#cdf6f2df, #9ed1d6)", width: "30%", maxHeight: "550px", }}>
                        <h3 className='text-center mb-4 fw-bold p-1'>Registrate</h3>
                        <Formik
                            initialValues={{ idUsuario: null, nombre: "", correo: "", numeroCelular: "", contraseña: "" }}
                            onSubmit={async (values) => {
                                try {
                                        values.idUsuario = Math.floor(Math.random() * 100)
                                        await createUsuarioRequest(values)
                                        alert("usuario registrado correctamente")
                                    
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                        >
                            {({ handleChange, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label>Nombre</label>
                                        <input type="text" onChange={handleChange} name='nombre' placeholder='Ingresa tu nombre' className='form-control' style={{ background: "linear-gradient(#ffffff, #9ed1d6)", borderRadius: "10px" }} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Correo Electrónico</label>
                                        <input type="correo" onChange={handleChange} name='correo' placeholder='Ingresa tu correo' className='form-control' style={{ background: "linear-gradient(#ffffff, #9ed1d6)", borderRadius: "10px" }} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Contraseña</label>
                                        <input type="password" onChange={handleChange} name='contraseña' placeholder='Ingresa una contraseña' className='form-control' style={{ background: "linear-gradient(#ffffff, #9ed1d6)", borderRadius: "10px" }} />
                                    </div>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn fw-bold' style={{ background: "linear-gradient(#94d6c1, #9ed1d6)", border: "none", maxWidth: "40%", marginLeft: "30%" }}>Registrar</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <p className='text-right mb-1 mt-3 text-center'>
                            ¿Ya tienes cuenta?<button className="btn-primary" style={{ border: "none", backgroundColor: "#9ed1d6" }}><Link href="" className='fw-bold' style={{ textDecoration: "none", color: "black" }} to="/Login">Iniciar Sesion</Link></button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}