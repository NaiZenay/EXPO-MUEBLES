import React, { useEffect, useRef } from "react";
import BannerNosotros from "../../Components/Banner/BannerNosotros";
import PageContent from "../../LAYOUT/PageContent";
import renderLabenze from "../../assets/Nosotros/Nosotros_2.webp";
import almecenGR from "../../assets/Nosotros/Nosotros_3.webp";
import req_logo from "../../assets/logos/requiez_color.png";
import infiniti_logo_logo from "../../assets/logos/infiniti_color.png";
import interface_logo from "../../assets/logos/interface_color.png";
import labenze_logo from "../../assets/logos/labenze_color.png";
const Nosotros = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const iframe = videoRef.current;

                    if (entry.isIntersecting) {
                        // Agrega autoplay al src del video
                        const currentSrc = iframe.src;
                        if (!currentSrc.includes("autoplay=1")) {
                            iframe.src = `${currentSrc}&autoplay=1`;
                        }
                    } else {
                        // Remueve autoplay si no está visible
                        const currentSrc = iframe.src.replace("&autoplay=1", "");
                        iframe.src = currentSrc;
                    }
                });
            },
            { threshold: 0.5 } // Se activa cuando el 50% del video es visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <>
            <BannerNosotros />
            <section>
                <PageContent>
                    <div className="row">
                        <div className="col-lg-5 p-3 ">
                            <h1 className="SANS-REGULAR fw-bolder fs-1">
                                EN CADA PRODUCTO, <br /> REFLEJO DE LA CALIDAD <br /> Y EL COMPROMISO.
                            </h1>
                            <br />
                            <p className="SANS-REGULAR fs-4">
                                Somos un grupo que brindamos soluciones en mobiliario para espacios de oficina, contract y hospitality.
                            </p>
                            <br />
                            <p className="SANS-REGULAR fs-4 mb-5">
                                Cada una de nuestras marcas cuenta con una escencia y personalidad propia, ofreciendo una extensa gama de acabados y colores que nos mantienen en tendencia.
                            </p>
                        </div>
                        <div className="col-lg-7 ">
                            <img src={renderLabenze} alt="Render Labenze" className="mb-5 img-fluid" />
                        </div>
                        <div className="row">
                            <div className="col-lg-5 order-2">
                                <img src={almecenGR} className="img-fluid" alt="Almacen grupo Requiez" />
                            </div>
                        <div className="col-lg-1"></div>

                            <div className="col-lg-5 order-1">
                                <p className="SANS-REGULAR fs-4">
                                    Contamos con exclusividad de socios comerciales internacionales y más de 250 distribuidores en toda la república mexicana.
                                </p>
                                <br />
                                <p className="SANS-REGULAR fs-4 mb-5">
                                    El catálogo de Grupo Requiez es el más extenso del país. con propuestas en tecnología diseño para corresponder a la necesidad de los distintos usuarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </PageContent>
                <PageContent>
                    <iframe
                        ref={videoRef}
                        className="w-100"
                        height={650}
                        src="https://www.youtube.com/embed/SGA-uN8Fvgo?enablejsapi=1"
                        title="Pato Caminando Shido 1 HORA"
                        FrameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />

                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                            <img src={req_logo} alt="Requiez" className="logo-marca" />
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                            <img src={labenze_logo} alt="Labenze" className="logo-marca" />
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                            <img src={infiniti_logo_logo} alt="Infiniti" className="logo-marca" />
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                            <img src={interface_logo} alt="Interface" className="logo-marca" />
                        </div>
                    </div>
                </PageContent>
            </section>
        </>
    );
};

export default Nosotros;
