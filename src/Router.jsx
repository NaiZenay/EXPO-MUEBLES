import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import Productos from './Components/Productos/ProductosXmarca.jsx'
import Nosotros from "./Pages/Nosotros/Nosotros.jsx"
import PageLayOut from './LAYOUT/PageLayOut.jsx'
import Marca from './Pages/Marcas/Marca.jsx'
import Producto from './Pages/Producto/Producto.jsx'
const Router = () => {
  return (
    <BrowserRouter>
      <PageLayOut>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/marca' element={<Marca/>}/>
          <Route path='/producto' element={<Producto/>}/>
        </Routes>
        </PageLayOut>
    </BrowserRouter>
  )
}

export default Router
