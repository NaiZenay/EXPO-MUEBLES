import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Pantalla from "../Components/PantallaCarga/Pantalla";

const PageLayOut = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0,0)
    // Reiniciar la visibilidad de la pantalla de carga
    const pantallaCarga = document.getElementById("pantalla-carga");
    if (pantallaCarga) {
      pantallaCarga.style.display = "block"; // Asegurar que se muestre
    }

    // Bloquear desplazamiento durante la animación
    document.body.style.overflow = "hidden";

    // Ejecutar animación
    anime({
      targets: "#pantalla-carga",
      translateY: ["0%", "-100%"],
      easing: "easeInOutQuad",
      duration: 1400,
      complete: () => {
        if (pantallaCarga) {
          pantallaCarga.style.display = "none"; // Ocultar pantalla de carga al terminar
        }
        document.body.style.overflow = ""; // Restaurar desplazamiento
      },
    });
  }, [location]); // Escuchar cambios de ruta

  return (
    <>
      <Pantalla />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayOut;
