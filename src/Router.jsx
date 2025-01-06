import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import Productos from './Pages/Productos/Productos.jsx'
import Nosotros from "./Pages/Nosotros/Nosotros.jsx"
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
