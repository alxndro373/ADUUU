import { Link } from "react-router-dom"
import logo from "../assets/ADU.png"
import { useAuth } from "../../auth/AuthProvider";

const Nav = () => {
    const auth = useAuth()

    return (
        <nav className="navbar" style={{ background: "#f9f9f9", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src={logo} alt="" style={{ width: "150px", height: "60px", objectFit: "cover" }} />
            <ul className="nav d-flex align-items-center" style={{ fontFamily: 'Oswald, sans-serif', fontStyle: "normal"}}>
                <li className="nav-item me-5 border-end pe">
                    <Link className="nav-link text-body" to="/">INICIO</Link>
                    <div className="divider"></div>
                </li>
                <li className="nav-item me-5 border-end pe">
                    <Link className="nav-link text-body" to="/Terminal">TERMINALES</Link>
                    <div className="divider"></div>
                </li>
                <li className="nav-item me-5 border-end pe">
                    <Link className="nav-link text-body" to="/Atencion">ATENCIÓN</Link>
                    <div className="divider"></div>
                </li>
                {
                    !auth.isAuthenticated ? (
                        <li className="nav-item me-5">
                            <Link className="nav-link text-body" to="/Login">INICIAR SESIÓN</Link>
                        </li>
                        
                    )
                    : (
                        <li className="nav-item me-5 d-flex flex-column align-items-center">
                            <p className="">BIENVENIDO</p>
                            <span className="">{auth.name}</span>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav