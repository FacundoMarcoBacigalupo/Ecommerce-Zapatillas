import React from 'react'
import "./EstilosFooter.css"
import LogoNbStyle from "../../assets/images/LogoNbStyle.jpg"
import tiktok from '../../assets/images/tiktok-chico.png'
import instagram from '../../assets/images/instagram-chico.png'
import facebook from '../../assets/images/facebook-chico.png'



export const AppFooter = () =>{

    return (
    <footer className="containerFooter">

        <img src={LogoNbStyle} className="fotoFooter" id='logoFooter' alt="NbStyle" />

        <div className="redesFooter">
            <p className="puertoFooter">Seguinos en nuestras Redes Sociales</p>

            <a href="https://www.tiktok.com/@nbstyleok?lang=es" id="tiktok"><img src={tiktok} alt="TikTok" /></a>

            <a href="https://www.instagram.com/nbstyleok/" id="ig"><img src={instagram} alt="Instagram" /></a>

            <a href="https://www.facebook.com/nbstyleok" id="fb"><img src={facebook} alt="Facebook" /></a>
        </div>

        <p className="copyrightFooter">Argentina, Buenos Aires ©2023 Nb Style. Todos los derechos reservados.</p>
    </footer>
    )
}



export default AppFooter