import Banner from '../../Components/Banner/Banner';
import Carrusel from '../../Components/Carrusel/Carrusel';
import Marcas from '../../Components/Marcas/Marcas';
import "./home.css";
import banco from "../../assets/Lanzamientos.webp"
const Home = () => {
  return (
    <>
      <Banner />
      <div className='lanzamientos-container position-relative mt-5 mb-5'>
        <p style={{zIndex:50}} className='SANS-REGULAR lanzaminetos lh-1 fw-bolder mt-5 text-dark mb-0'>LANZAMIE
          <img src={banco} className='banco-lanzamiento' alt="Lanzamientos 2025" />
        </p>
        <p className='SANS-REGULAR lanzaminetos text-end fw-bolder lh-1 mt-0 text-dark'>NTOS <span style={{zIndex:-5}} className='kk-TXT p-0 m-0 fw-lighter SANS-THIN'>2025</span></p>
      </div>
      <Carrusel />
      <Marcas />
    </>
  );
};

export default Home;
