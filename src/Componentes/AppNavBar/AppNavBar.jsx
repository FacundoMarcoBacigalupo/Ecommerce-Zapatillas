import React from 'react'
import "./EstilosNavBar.css"
import Logo from "../../Imagenes/LogoNbStyle.jpg"
import MenuBar from "../../Imagenes/MenuBar.png"
import CartWidget from "../CartWidget/CartWidget"



export const AppNavBar = () =>{

    return (
        <nav className="navbar navbar-expand-md navbarColor">

            <div className="container-fluid">

                <p className="navbar-brand" href="./index.html"><img src={Logo} alt="Logo" id='logo' /></p>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon menuBar"><img src={MenuBar} alt="Menu Bar" id='menuBar' /></span>
                </button>

                <div className="collapse navbar-collapse barraNav" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link active">Inicio</p>
                        </li>

                        <li className="nav-item">
                            <p className="nav-link">Zapatillas</p>
                        </li>

                        <li className="nav-item">
                            <p className="nav-link">Historia</p>
                        </li>

                        <li className="nav-item">
                            <p className="nav-link">
                                <CartWidget />
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default AppNavBar