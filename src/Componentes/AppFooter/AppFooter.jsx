import React from 'react'
import "./EstilosFooter.css"
import Logo from "../../Imagenes/LogoNbStyle.jpg"
import Tiktok from "../../Imagenes/tiktok-chico.png"
import Instagram from "../../Imagenes/instagram-chico.png"
import Facebook from "../../Imagenes/facebook-chico.png"





export const AppFooter = () =>{

    return (
    <footer className="containerFooter">

        <img src={Logo} className="fotoFooter" id='logoFooter' alt="NbStyle" />

        <div className="redesFooter">
            <p className="puertoFooter">Seguinos en nuestras Redes Sociales</p>

            <a href="https://www.tiktok.com/@nbstyleok?lang=es" id="tiktok"><img src={Tiktok} alt="TikTok" /></a>

            <a href="https://www.instagram.com/nbstyleok/" id="ig"><img src={Instagram} alt="Instagram" /></a>

            <a href="https://www.facebook.com/nbstyleok" id="fb"><img src={Facebook} alt="Facebook" /></a>
        </div>

        <p className="copyrightFooter">Argentina, Buenos Aires ©2023 Nb Style. Todos los derechos reservados.</p>
    </footer>
    )
}



export default AppFooter