import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import Productos from './Components/Productos/ProductosXmarca.jsx'
import Nosotros from "./Pages/Nosotros/Nosotros.jsx"
import PageLayOut from './LAYOUT/PageLayOut.jsx'
import Marca from './Pages/Marcas/Marca.jsx'
import Producto from './Pages/Producto/Producto.jsx'

import req_logo from "./assets/logos/requiez_color.png";
import infiniti_logo_logo from "./assets/logos/infiniti_color.png";
import interface_logo from "./assets/logos/interface_color.png";
import labenze_logo from "./assets/logos/labenze_color.png";
import req from "./assets/Marcas/Requiez.webp";
import Infiniti from "./assets/Marcas/Infiniti.webp";
import Interface from "./assets/Marcas/Interface.webp";
import Lab from "./assets/Marcas/Labenze.webp";
const Router = () => {

  const requiez = {
    nombre: "requiez",
    img: req,
    logo:req_logo
  }
  const labenze = {
    nombre: "labenze",
    img: Lab,
    logo:labenze_logo
  }
  const inteerface = {
    nombre: "interface",
    img: Interface,
    logo:interface_logo
  }
  const infiniti = {
    nombre: "infiniti",
    img: Infiniti,
    logo:infiniti_logo_logo
  }

  return (
  <BrowserRouter>
    <PageLayOut>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/Requiez' element={<Marca marca={requiez}/>} />
        <Route path='/Labenze' element={<Marca marca={labenze}/>} />
        <Route path='/Interface' element={<Marca marca={inteerface}/>} />
        <Route path='/Infiniti' element={<Marca marca={infiniti}/>} />
        <Route path='/producto' element={<Producto />} />
      </Routes>
    </PageLayOut> 
  </BrowserRouter>
)
}

export default Router
