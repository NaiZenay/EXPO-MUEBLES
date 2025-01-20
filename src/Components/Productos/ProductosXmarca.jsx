import PageContent from "../../LAYOUT/PageContent"
import producto from "../../assets/prod.png"
import lanzamient from "../../assets/Prod/lanzamiento.png"
import NombreProducto from "./NombreProducto"
import { Link } from "react-router-dom"
import "./productoComponents.css"
const ProductosXmarca = () => {
  return (
    <PageContent>
      <h1 className="SANS-REGULAR">LANZAMIENTOS</h1>
      <div className="row">
       
        <div className="col-lg-3 col-md-4 position-relative">
          <Link to="/producto" className="text-dark text-decoration-none">
            <img src={lanzamient} className="lanzamiento-tag" width={60} loading={"lazy"} alt="" />
            <img src={producto} className="img-fluid" loading={"lazy"} alt="" />
            <NombreProducto nombre={"norman"} />
          </Link>
        </div> 

        <div className="col-lg-3 col-md-4 position-relative">
          <Link to="/producto" className="text-dark text-decoration-none">
            <img src={lanzamient} className="lanzamiento-tag" width={60} loading={"lazy"} alt="" />
            <img src={producto} className="img-fluid" loading={"lazy"} alt="" />
            <NombreProducto nombre={"norman"} />
          </Link>
        </div> 

        <div className="col-lg-3 col-md-4 position-relative">
          <Link to="/producto" className="text-dark text-decoration-none">
            <img src={lanzamient} className="lanzamiento-tag" width={60} loading={"lazy"} alt="" />
            <img src={producto} className="img-fluid" loading={"lazy"} alt="" />
            <NombreProducto nombre={"norman"} />
          </Link>
        </div> 

        <div className="col-lg-3 col-md-4 position-relative">
          <Link to="/producto" className="text-dark text-decoration-none">
            <img src={lanzamient} className="lanzamiento-tag" width={60} loading={"lazy"} alt="" />
            <img src={producto} className="img-fluid" loading={"lazy"} alt="" />
            <NombreProducto nombre={"norman"} />
          </Link>
        </div> 

      </div>

      <h1 className="SANS-REGULAR">DE LINEA</h1>
      <div className="row">
        
      </div>
    </PageContent>
  )
}

export default ProductosXmarca
