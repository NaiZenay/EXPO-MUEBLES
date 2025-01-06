import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import Productos from './Pages/Productos/Productos.jsx'
import Nosotros from "./Pages/Nosotros/Nosotros.jsx"
import PageLayOut from './LAYOUT/PageLayOut.jsx'
const Router = () => {
  return (
    <BrowserRouter>
      <PageLayOut>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
        </PageLayOut>
    </BrowserRouter>
  )
}

export default Router
