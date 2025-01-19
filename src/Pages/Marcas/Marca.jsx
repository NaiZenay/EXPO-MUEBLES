import { useEffect } from "react"
import BannerMarca from "../../Components/Banner/BannerMarca"
import ProductosXmarca from "../../Components/Productos/ProductosXmarca"

const Marca = ({marca}) => {
  useEffect(() => {
    scrollTo(0,0)
  })
  
  return (
    <div>
      <BannerMarca marca={marca}/>
      <ProductosXmarca/>
    </div>
  )
}

export default Marca
