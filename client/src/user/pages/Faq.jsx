import React from 'react';
import p1 from '../assets/att_client.png'
import p2 from '../assets/boleto.png'
import p3 from '../assets/equipaje.png'
import p4 from '../assets/apreton.png'
import p5 from '../assets/pago.png'
import p6 from '../assets/factura.png'
import p7 from '../assets/phone.png'
import Nav from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';

export const Faq = () => {

    return (
        <> 
        <Nav /> 
        <div className='' style={{fontFamily: "Oswal, sans-serif"}}>
            <div className='position-relative' style={{}}>
                <img src={p1} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover"}} />
                <div className="position-absolute top-50 start-0 translate-middle-y" style={{ marginLeft: "10%", color: "#ffff"}}>
                    <h1 className='fw-bold'>Atención al Cliente</h1>
                    <h2 style={{fontSize: 20}}>Consulta sobre nuestro servicio.</h2>
                </div>
            </div>

            <div className="text-center" style={{maxWidth: "50%", marginLeft: "25%"}}>
                <section className=''>
                    <div>
                        <h3 className='' style={{fontSize: 20}}>En el Centro de Atención a Clientes estamos listos para atender los 365 días del año.</h3>
                        <h3 className='' style={{fontSize: 20}}>Tenemos interés en conocer tu experiencia de viaje y saber lo que piensas de nuestro servicio.</h3>
                        <h3 className='' style={{fontSize: 20}}>¿Alguna pregunta?</h3>
                    </div>
                </section>
            </div>

            
            <div className='container' style={{}}>
                <h2 className='text-center' style={{fontSize: 25, color:"red"}}>Preguntas frecuentes</h2>
                <div className="row" style={{backgroundColor: "", marginTop: ""}}>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "75%"}}>   
                            <img src={p2} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>                     
                            <Link className='nav-link text-body' style={{fontSize: 17}}>Boletos y Descuentos</Link>
                        </button>
                    </div>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "75%"}}>
                            <img src={p3} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>      
                            <Link className='nav-link text-body' style={{fontSize: 17}}>Equipaje y Mascotas</Link>
                        </button>
                    </div>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "75%"}}>
                            <img src={p4} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>
                            <Link className='nav-link text-body' style={{fontSize: 17}}>Servicios y Promociones</Link>
                        </button>
                    </div>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "90%"}}>
                            <img src={p5} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>
                            <Link className='nav-link text-body' style={{fontSize: 17}}>Formas de pago</Link>
                        </button>
                    </div>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "90%"}}>
                            <img src={p6} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>
                            <Link className='nav-link text-body' style={{fontSize: 17}}>Facturación</Link>
                        </button>
                    </div>
                    <div class="col-md-4 mb-1 text-center p-3">
                        <button class="faq-box" style={{backgroundColor: "white", borderRadius: "10px", padding: "25px", width: "55%", height: "90%"}}>
                           <img src={p7} alt="" className='' style={{maxWidth: '80%', maxHeight: '80%', marginTop: '-15%'}}/>
                           <Link className='nav-link text-body' style={{fontSize: 17}}>Tips</Link> 
                        </button>
                    </div>
                </div>
            </div>            
        </div>
        </>
    )
}