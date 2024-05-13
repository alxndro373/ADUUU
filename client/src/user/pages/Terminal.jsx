import React from 'react'
import Nav from '../components/Navbar'
import Maps from '../components/Maps'
import i1 from '../assets/busIcon.png'

export const Terminal = () => {
    return(
        <>
            <Nav />
            <div className='' style={{fontFamily: "Oswal, sans-serif"}}>
                <div className='mx-auto mt-5' style={{background:"white", maxWidth:"80%"}}>
                    <div className='' style={{fontSize:"19px"}}>
                        <h2 className='fw-bold' style={{marginLeft:"10%"}}>Terminales</h2>
                        <p style={{marginLeft:"20px"}}>Comienza un gran viaje desde nuestras terminales, conoce toda su información para sentirte en casa. <img src={i1} style={{width:"35", height:"35px"}}/> </p> 
                    </div>
                </div>

                <div className='' style={{maxWidth:"30%", marginLeft:"10%", fontSize:"19px"}}>
                    <label htmlFor="origen">¿Dónde te encuentras?</label>
                    <select name="origen" id="idOrigen" style={{width:"100%", background:"linear-gradient(#ffffff, #9ed1d6)", borderRadius:"5px", border:"none"}}><option value="" disabled selected>Selecciona una opción</option></select>
                    <div className='' style={{transform:"translate(650px, -30px)"}}>
                        <Maps />
                    </div>
                </div>
            </div>
        </>
    )
}