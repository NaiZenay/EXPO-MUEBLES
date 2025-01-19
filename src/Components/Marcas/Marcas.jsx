import "./marcas.css"
import { Link } from "react-router-dom"
import logo_INFINITI from "../../assets/logos/LogoInfiniti.png"
import logo_INTERFACE from "../../assets/logos/LogoInterface.png"
import logo_REQUIEZ from "../../assets/logos/LogoRequiez.png"
import logo_LABENZE from "../../assets/logos/LogoLabenze.png"
import Portada_Infiniti from "../../assets/Marcas/Infiniti.webp"
import Portada_Interface from "../../assets/Marcas/Interface.webp"
import Portada_Labenze from "../../assets/Marcas/Labenze.webp"
import Portada_requiez from "../../assets/Marcas/Requiez.webp"

const Marcas = () => {
  return (
    <div className='contenedor-marca kk-BG d-flex align-items-center justify-content-center position-relative'>
      <div id="requiez">
        <Link to="/requiez" className="text-decoration-none">
          <div className="row">
            <div className="col-lg-6">
              <img src={logo_REQUIEZ} className="logo-marcas-LG" alt="Logo requiez" />
              <p className="SANS-REGULAR text-light fs-5">La mejor línea de sillas y <br /> sillones para oficina.</p>
            </div>
            <div className="col-lg-9">
              <img src={Portada_requiez} className="portada" style={{ width: 350 }} alt="Portada de Requiez" />
            </div>
          </div>
        </Link>
      </div>

      <div id="infiniti">
        <Link to="/infiniti" className="text-decoration-none">

          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-end">
              <img src={Portada_Infiniti} className="portada" style={{ width: 350 }} alt="Portada Infiniti" />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-start justify-content-end">
              <img src={logo_INFINITI} className="logo-marcas-LG" alt="logo infiniti" />
              <p className="SANS-REGULAR text-light fs-5 pe-4 mt-3">
                Diseño italiano multicultural.
              </p>
            </div>
          </div>
        </Link>
      </div>


      <div id="interface">
        <Link to="/interface" className="text-decoration-none">

          <div className="row">
            <div className="col-lg-4 p-0 m-0 d-flex flex-column align-items-start justify-content-end">
              <img src={logo_INTERFACE} className="logo-marcas-LG" alt="logo interface" />
              <p className="SANS-REGULAR text-start text-light fs-5 mt-3">
                Pisos con la menor huella <br /> de carbono del mercado.
              </p>
            </div>
            <div className="col-lg-7 p-0 m-0">
              <img src={Portada_Interface} className="portada" style={{ width: 300 }} alt="Portada Interface" />
            </div>
          </div>
        </Link>
      </div>

      <div id="labenze">
        <Link to="/labenze" className="text-decoration-none">

          <div className="row m-0 p-0">
            <div className="col-lg-7">
              <img src={Portada_Labenze} className="portada" style={{ width: 450 }} alt="Portada Labenze" />
            </div>
            <div className="col-lg-8">
              <img src={logo_LABENZE} className="logo-marcas-LG" alt="logo Labenze" />
              <p className="SANS-REGULAR text-light fs-5">Una linea ideal de mobiliario contract corporativo y residencial.</p>
            </div>
          </div>
        </Link>
      </div>
      <h1 className='SANS-REGULAR text-light titulo-marcas'>MARCAS</h1>
    </div>
  )
}

export default Marcas
