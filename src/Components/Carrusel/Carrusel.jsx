import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carrusel.css";
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom"
import logo_Labenze from "../../assets/logos/labenze.webp"
import menta from "../../assets/Prod/MentaPOP.png"
import mimosas from "../../assets/Prod/Mimosas.png"
import rr from "../../assets/Prod/Round&Roll.png"


const Carrusel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper text-dark full-screen"
        >
            <SwiperSlide className='m-0 slide-wrapper'>
                <Link className="text-decoration-none text-dark" id="div1" to="/">
                    <div className='row'>
                        <div className="col-lg-4">
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-4"><span className="limon-viejo-TXT">___</span>MENTA POP</span><br />
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={logo_Labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={320} height={320} src={menta} alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div2" to="/">
                    <div className='row'>
                        <div className="col-lg-4">
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-4"><span className="limon-viejo-TXT">___</span>MIMOSAS</span><br />
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={logo_Labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={320} height={320} src={mimosas} alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div3" to="/">
                    <div className='row'>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={420} height={320} src={rr} alt="" />
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-end justify-content-end" style={{ height: '350px' }}>
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-4">
                                <span className="limon-viejo-TXT">___</span>ROUND & ROLL
                            </span>
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca mt-2" src={logo_Labenze} alt="labenze" />
                        </div>


                    </div>
                </Link>
            </SwiperSlide>
       
            <SwiperSlide className='m-0 slide-wrapper'>
                <Link className="text-decoration-none text-dark" id="div1" to="/">
                    <div className='row'>
                        <div className="col-lg-3">
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-3"><span className="limon-viejo-TXT">___</span>NOMBRE</span><br />
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={logo_Labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-9">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={350} height={350} src="https://test.labenze.com/uploads/Productos/BAKHITA/ImgsAmbientas/bakhita_01_1.jpg" alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div2" to="/">
                    <div className='row'>
                        <div className="col-lg-3">
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-3"><span className="limon-viejo-TXT">___</span>NOMBRE</span><br />
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={logo_Labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-9">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={350} height={350} src="https://test.labenze.com/uploads/Productos/BAKHITA/ImgsAmbientas/bakhita_01_1.jpg" alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div3" to="/">
                    <div className='row'>
                        <div className="col-lg-9">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel" width={450} height={350} src="https://test.labenze.com/uploads/Productos/BAKHITA/ImgsAmbientas/bakhita_01_1.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-end justify-content-end" style={{ height: '350px' }}>
                            {/* MARCA */}
                            <span className="SANS-REGULAR fs-3">
                                <span className="limon-viejo-TXT">___</span>NOMBRE
                            </span>
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca mt-2" src={logo_Labenze} alt="labenze" />
                        </div>


                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carrusel
