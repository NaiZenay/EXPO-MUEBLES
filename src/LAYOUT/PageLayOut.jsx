import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Pantalla from '../Components/PantallaCarga/Pantalla';

const PageLayOut = ({children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    
        // Prevenir el desplazamiento durante la animación
        document.body.style.overflow = 'hidden';
    
        anime({
          targets: "#pantalla-carga",
          translateY: ["0%", "-100%"],
          easing: "easeInOutQuad",
          duration: 1400,
          complete: () => {
            const pantallaCarga = document.getElementById("pantalla-carga");
            if (pantallaCarga) {
              pantallaCarga.parentNode.removeChild(pantallaCarga);
            }
            document.body.style.overflow = '';
          },
        });
      }, []);
    return (
        <>
            <Pantalla />
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default PageLayOut
