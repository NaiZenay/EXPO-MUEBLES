import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carrusel.css";
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom"
import infiniti from "../../assets/logos/infiniti_color.png"
import interrface from "../../assets/logos/interface_color.png"
import labenze from "../../assets/logos/labenze_color.png"
import requiez from "../../assets/logos/requiez_color.png"

import menta from "../../assets/Prod/MentaPOP.png"
import mimosas from "../../assets/Prod/Mimosas.png"
import rr from "../../assets/Prod/Round&Roll.png"
import NombreProducto from '../Productos/NombreProducto';

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
                            <NombreProducto nombre={"Menta_POP"}/>
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel " src={menta} alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div2" to="/">
                    <div className='row'>
                        <div className="col-lg-4">
                            {/* MARCA */}
                            <NombreProducto nombre={"mimosas"}/>
                            
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca" src={labenze} alt="labenze" />
                        </div>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel " src={mimosas} alt="" />
                        </div>
                    </div>
                </Link>

                <Link className="text-decoration-none text-dark" id="div3" to="/">
                    <div className='row'>
                        <div className="col-lg-8">
                            {/* IMAGEN DE PRODUCTO  */}
                            <img className="imgCardCarrusel " src={rr} alt="" />
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-end justify-content-end" style={{ height: '350px' }}>
                        <NombreProducto nombre={"round & Roll"}/>
                            {/* NOMBRE DE PRODUCTO */}
                            <img className="logo-marca mt-2" src={infiniti} alt="infiniti" />
                        </div>
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carrusel
