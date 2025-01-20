import "./cardCarrusel.css"
import { Link } from "react-router-dom"
Link
const CardCarrusel = ({img}) => {
    const nombre = "menta pop"
    return (
        // From Uiverse.io by suleymanlaarabidev
        <div className="col-lg-4 col-md-12 p-0 ">
            <Link  to="/producto" className="text-decoration-none d-flex justify-content-center align-items-center">

                <div className="card">
                    <div className="first-content">
                        <img src={img} alt="" />
                    </div>
                    <div className="second-content p-4">
                        <h3 className="SANS-REGULAR fw-bold fs-4">{nombre.toUpperCase()}</h3>
                        <p className="SANS-REGULAR fs-5">
                            Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipiscing elit dignissim litora arcu, dictum egestas erat turpis velit parturient scelerisque rhoncus dapibus, luctus rutrum aptent hendrerit facilisis fames porttitor libero sagittis. Sociosqu bibendum viverra ante aliquet montes turpis per curae massa vulputate porttitor lectus velit, himenaeos congue gravida nunc quis pharetra dictum mi pulvinar at volutpat lacus. Nulla convallis diam porttitor vulputate est class imperdiet magnis, morbi odio hac cum habitant inceptos a malesuada dignissim, torquent habitasse justo commodo pretium nam placerat. amet consectetur adipiscing elit, suscipit ligula viverra pellentesque commodo dictumst ridiculus, donec curae enim metus ullamcorper aptent convallis, mus penatibus eros consequat facilisis suspendisse.
                        </p>
                        <button type="button" className="btn border-dark border-3 rounded-3 fw-bolder SANS-REGULAR btn-ver-Producto">VER PRODUCTO</button>
                    </div>
                </div>
            </Link >
        </div>

    )
}

export default CardCarrusel
