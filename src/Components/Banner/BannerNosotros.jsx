import "./banner.css"
import ns from "../../assets/Nosotros/Nosotros_1.webp"
const BannerNosotros = () => {
    return (
        <div className="row m-0 p-0 banner-HOME huevo-BG">
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-3 d-flex justify-content-center align-items-end flex-column">
                <div className="container">
                    <h1 className="limon-viejo-TXT fw-bolder SANS-REGULAR texto-banner">NOSOTROS</h1>
                    <img src="" alt="Logo Grupo Requiez" />
                </div>
            </div>
            <div className="col-lg-7 d-none d-lg-flex justify-content-start align-items-center position-relative">
                <img src={ns} style={{zIndex: 5}} className="img-fluid" alt="Nosotros Grupo Requiez" />
                <div className="recuadro-banner-NOSOTROS limon-viejo-BG"></div>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>

        </div>
    )
}

export default BannerNosotros
