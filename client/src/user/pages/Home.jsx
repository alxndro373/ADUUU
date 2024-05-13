import Nav from '../components/Navbar.jsx'
import p1 from '../assets/travel2.jpg'
import p2 from '../assets/travel3.jpg'
import p3 from '../assets/collage.jpeg'
import fondo from '../assets/backTravel.jpeg'
import { DropDown } from '../components/DropDown.jsx'
import { useCuidad } from '../../hooks/useCuidad.js'
import { useEffect } from 'react'
export const Home = () => {

    const {ciudades,fetchCuidades} = useCuidad()
    useEffect(() => {
        fetchCuidades()
    },[])
   

    return (
        <>
            <Nav />
            <div className='' style={{ fontFamily: "Oswal, sans-serif" }}>
                <div className="row d-flex align-items-center justify-content-start" style={{ maxWidth: "100%", marginTop: "9%" }}>
                    <div className="col-md-10 d-flex justify-content-center" style={{}}>
                        <div style={{ position: "relative" }}>
                            <img src={fondo} alt="" className="img-fluid" style={{ position: "relative", left: "-9%" }} />
                            <div>
                                <img src={p3} alt="" className="img-fluid" style={{ position: "absolute", top: "15%", left: "-2%", width: "420px", height: "280px", opacity: "0.5" }} />
                                <img src={p2} alt="" className="img-fluid" style={{ position: "absolute", top: "17%", left: "32%", width: "290px", height: "180px", transform: "rotate(-9deg)" }} />
                                <img src={p1} alt="" className="img-fluid" style={{ position: "absolute", top: "40%", left: "28%", width: "290px", height: "180px" }} />
                            </div>

                        </div>

                        <div className="container" style={{ marginRight: "10%", width: "120%", transform: "translate(-15%, -15%)" }}>
                            <div className='row align-items-start mb-3'>
                                <div className='col-md-10 offset-md-9'>
                                    <div className="text-center">
                                        <h1 style={{ fontSize: "26px" }}>Siempre hay un nuevo destino por descubrir</h1>
                                        <h1 style={{ fontSize: "26px" }}>¡Elige el tuyo!</h1>
                                        <h1 style={{ fontSize: "26px" }}>Nosotros te llevamos</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='row' style={{ height: "70%" }}>
                                <div className='col-md-10 offset-md-9 ' style={{ background: "" }}> {/* #E3E4E5 */}
                                    < DropDown title={"Origen"} items={ciudades}/>
                                    < DropDown title={"Destino"} items={ciudades}/>
                                    <div className='d-grid mb-2'>
                                        <button className='btn fw-bold' style={{ background: "linear-gradient(#ffffff, #9ed1d6)", maxWidth: "40%", border: "none", marginLeft: "30%", marginTop: "5%" }}>Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   