import PageContent from "../../LAYOUT/PageContent"
import amb from "../../assets/Prod/amb.png"
import prod from "../../assets/prod.png"
import lanzamineto from "../../assets/Prod/lanzamiento.png"
import "./producto.css"
import { FileEarmark } from "react-bootstrap-icons"
const Producto = () => {
    return (
        <PageContent>
            <div className="row">
                <div className="col-lg-6">
                    <img src={amb} className="img-fluid" loading="lazy" alt="" />
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <img src={prod} className="img-fluid" loading="lazy" alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img src={prod} className="img-fluid" loading="lazy" alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img src={prod} className="img-fluid" loading="lazy" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-5">
                    <h2 className="SANS-BOLD fs-1  text-start">
                        <div className="row mb-0">
                            <div className="col-lg-8">
                                <span className="limon-viejo-TXT">___</span>NUTA LIGHT
                                <h4 className="SANS-THIN fw-light fs-5 mt-4">Diseñado por Favaretto </h4>
                            </div>
                            <div className="col-lg-4">
                                <img src={lanzamineto} className="lanzamineto-Tag-producto" alt="" />
                            </div>
                        </div>
                    </h2><br />
                    <p className="SANS-REGULAR fs-5">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, suscipit ligula viverra pellentesque commodo dictumst ridiculus, donec curae enim metus ullamcorper aptent convallis, mus penatibus eros consequat facilisis suspendisse.
                        <br />
                        <br />
                         Montes ornare tempus a ullamcorper commodo nostra pharetra ac sem, suscipit ad convallis sagittis tempor magna hac mattis et, velit class ultrices proin habitant tortor pulvinar nisl. Erat cubilia vivamus dis ac velit dapibus natoque sapien ante cum luctus, inceptos molestie orci nam duis ultricies curabitur pellentesque congue felis quisque, platea consequat fringilla nostra pulvinar commodo proin facilisis lacus ad.
                        <br />
                    </p>
                    <p className="SANS-BOLD fs-2 mt-5">REALIDAD <br /> AUMENTADA</p>
                    <p className="SANS-REGULAR">Visualizalo <br /> en tu espacio</p>
                    <a href="#" className="text-dark SANS-THIN"><FileEarmark className="fs-4"/>Ficha_Tecnica.pdf</a>
                </div>
            </div>
        </PageContent>
    )
}

export default Producto
