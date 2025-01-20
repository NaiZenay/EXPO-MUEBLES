import BannerMarca from "../../Components/Banner/BannerMarca"
import ProductosXmarca from "../../Components/Productos/ProductosXmarca"

const Marca = ({marca}) => {

  
  return (
    <div>
      <BannerMarca marca={marca}/>
      <ProductosXmarca/>
    </div>
  )
}

export default Marca
