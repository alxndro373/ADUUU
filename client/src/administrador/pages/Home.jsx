import autobus from '../assets/adu_bus.png'
import Nav from '../components/Navbar'


export const HomeAdmin = () => {

    return (
        <>
            < Nav />
            <div className="container">
                <section className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='lh-1'>Central de Autobuses</h1>
                        <h2 className='lh-lg fs-1' style={{marginLeft:"35%"}}>ADU</h2>
                        <h4 className='text-center'>Bienvenido Administrador</h4>
                    </div>
                    <div>
                        <img src={autobus} alt="" className='mb-5' style={{filter: "drop-shadow(-10px -10px 200px #0901e7)"}} />
                    </div>
                </section>
            </div>
        </>
    )
}