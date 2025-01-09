import { List } from "react-bootstrap-icons"
import "./nav.css"
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <header>
            <div className="container-fluid w-100 limon-viejo-BG p-4 ">
                <div className="row align-items-center">
                    {/* Brand / Logo */}
                    <div className="col-6 col-md-4 col-lg-4">
                        <Link to="/" className="text-decoration-none text-dark fs-4 fw-bold">GRUPO REQUIEZ</Link>
                    </div>
                    {/* Toggle Button */}
                    <div className="col-6 d-md-none text-end">
                        <button className="btn bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-expanded="false" aria-controls="navbarMenu">
                            <List className="text-dark fs-1" />
                        </button>
                    </div>
                    {/* Links */}
                    <div className="col-lg-8 col-md-8 collapse d-md-flex justify-content-end" id="navbarMenu">
                        <ul className="nav flex-column flex-md-row align-items-center">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link link-NAV SANS-REGULAR text-dark">LANZAMIENTOS</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={"/marca"} className="nav-link dropdown-toggle link-NAV SANS-REGULAR text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MARCAS
                                </Link>
                                <ul className="dropdown-menu border-dark rounded-3 p-3 limon-viejo-BG SANS-REGULAR" aria-labelledby="navbarDropdown">
                                    <li><Link to={"/marca"} className="dropdown-item link-NAV p-0 limon-viejo-BG" href="#">REQUIEZ</Link></li>
                                    <li><Link to={"/marca"} className="dropdown-item link-NAV p-0 limon-viejo-BG" href="#">LABENZE</Link></li>
                                    <li><Link to={"/marca"} className="dropdown-item link-NAV p-0 limon-viejo-BG" href="#">INFINITI</Link></li>
                                    <li><Link to={"/marca"} className="dropdown-item link-NAV p-0 limon-viejo-BG" href="#">INTERFACE</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/nosotros"} className="nav-link link-NAV SANS-REGULAR text-dark">NOSOTROS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link link-NAV SANS-REGULAR text-dark">DESCARGAS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
