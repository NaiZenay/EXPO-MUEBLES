import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./banner.css";
import { Pagination, Autoplay } from 'swiper/modules';
import expo from "../../assets/logos/expo.png"
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper banner-HOME huevo-BG m-0 text-dark"
      >
        <SwiperSlide className='m-0'>
          <div className="row m-0 p-0">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 h-100 mt-4 justify-content-end align-items-center">
              <p className='limon-viejo-TXT texto-banner lh-sm pe-0 ps-0 mt-5 text-start fw-bolder SANS-REGULAR'>DONDE LA SUSTENTABILIDAD <br /> Y EL DISEÑO <br /> SE ENCUENTRAN</p>
              <p className='SANS-REGULAR fs-1 lh-1 texto-banner'> <span className='text-dark fw-bolder'>19-22 </span>DE <br /> FEBRERO <br />
                <img src={expo} className='logo-marca' alt="EXPO MUEBLE INTERNACIONAL 2025" />
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
