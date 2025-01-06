import PageLayOut from "../../LAYOUT/PageLayOut";
import Banner from '../../Components/Banner/Banner';
import Carrusel from '../../Components/Carrusel/Carrusel';
import Marcas from '../../Components/Marcas/Marcas';
import "./home.css";

const Home = () => {
  return (
    <PageLayOut>
      <Banner />
      <div className='lanzamientos-container mt-5 mb-5'>
        <p className='SANS-REGULAR lanzaminetos fw-bolder mt-5 text-dark mb-0'>LANZAMIEN</p>
        <p className='SANS-REGULAR lanzaminetos text-end fw-bolder mt-0 text-dark'>TOS <span className='kk-TXT p-0 m-o fw-lighter SANS-THIN'>2025</span></p>
      </div>
      <Carrusel />
      <Marcas />
    </PageLayOut>
  );
};

export default Home;
