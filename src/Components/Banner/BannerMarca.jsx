import labenze from "../../assets/Marcas/Labenze.webp"
const BannerMarca = () => {
  return (
    <div>
         <div className="row m-0 p-0 banner-HOME huevo-BG">
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-3 d-flex justify-content-center align-items-end flex-column">
                    <img src="" alt="Logo Marca" />
            </div>
            <div className="col-lg-7 d-none d-lg-flex justify-content-start align-items-center position-relative">
                <img src={labenze} style={{zIndex: 5}} className="img-fluid" alt="Nosotros Grupo Requiez" />
                <div className="recuadro-banner-marca limon-viejo-BG"></div>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>

        </div>
    </div>
  )
}

export default BannerMarca
