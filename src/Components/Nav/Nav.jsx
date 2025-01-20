import { useNavigate } from "react-router-dom"
import { List } from "react-bootstrap-icons"
import "./nav.css"
import { Link } from "react-router-dom"
import grLogo from "../../assets/logos/grLogo.png"
const Nav = () => {
    const navigate = useNavigate();

    const goToLanzamientos = () => {
        navigate("/"); // Navega a Home
        setTimeout(() => {
            const section = document.getElementById("lanzamientos");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Espera a que se renderice Home
    };

    return (
        <header>
            <div className="container-fluid w-100 limon-viejo-BG p-4 ">
                <div className="row align-items-center">
                    {/* Brand / Logo */}
                    <div className="col-6 col-md-2 col-lg-4">
                        <Link to="/" className="text-decoration-none text-dark fs-4 fw-bold">
                            <img src={grLogo} alt="Grupo Requiez" className="img-fluid" />
                        </Link>
                    </div>
                    {/* Toggle Button */}
                    <div className="col-6 d-md-none text-end">
                        <button className="btn bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-expanded="false" aria-controls="navbarMenu">
                            <List className="text-dark fs-1" />
                        </button>
                    </div>
                    {/* Links */}
                    <div className="col-lg-8 col-md-10 collapse d-md-flex justify-content-end" id="navbarMenu">
                        <ul className="nav flex-column flex-md-row align-items-center">
                            <li className="nav-item">
                                <button onClick={goToLanzamientos} className="nav-link link-NAV SANS-REGULAR text-dark">LANZAMIENTOS</button>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={"/marca"} className="nav-link dropdown-toggle link-NAV SANS-REGULAR text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MARCAS
                                </Link>
                                <ul className="dropdown-menu border-dark rounded-3 p-3 limon-viejo-BG SANS-REGULAR" aria-labelledby="navbarDropdown">
                                    <li><Link to={"/requiez"} className="dropdown-item link-NAV p-0 limon-viejo-BG" >REQUIEZ</Link></li>
                                    <li><Link to={"/labenze"} className="dropdown-item link-NAV p-0 limon-viejo-BG" >LABENZE</Link></li>
                                    <li><Link to={"/infiniti"} className="dropdown-item link-NAV p-0 limon-viejo-BG" >INFINITI</Link></li>
                                    <li><Link to={"/interface"} className="dropdown-item link-NAV p-0 limon-viejo-BG" >INTERFACE</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/nosotros"} className="nav-link link-NAV SANS-REGULAR text-dark">NOSOTROS</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to={"/marca"} className="nav-link dropdown-toggle link-NAV SANS-REGULAR text-dark" id="descargas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    DESCARGAS
                                </Link>
                                <ul className="dropdown-menu border-dark rounded-3 p-3 limon-viejo-BG SANS-REGULAR" aria-labelledby="descargas">
                                    <li className="dropdown-item link-NAV p-0 limon-viejo-BG" >Descarga 1</li>
                                    <li className="dropdown-item link-NAV p-0 limon-viejo-BG" >Descarga 2</li>
                                    <li className="dropdown-item link-NAV p-0 limon-viejo-BG" >Descarga 3</li>
                                    <li className="dropdown-item link-NAV p-0 limon-viejo-BG" >Descarga 4</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
