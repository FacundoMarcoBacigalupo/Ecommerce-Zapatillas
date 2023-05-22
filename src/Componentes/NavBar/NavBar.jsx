import React from 'react'
import "./EstilosNavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import LogoNbStyle from "../../assets/images/LogoNbStyle.jpg"
import menuBar from "../../assets/images/MenuBar.png"
import {NavLink} from 'react-router-dom'


const NavBar = () =>{

    return (
        <nav className="navbar navbar-expand-md navbarColor">

            <div className="container-fluid">

                <NavLink to="/" className="navbar-brand"><img src={LogoNbStyle} alt="Logo" id='logo' /></NavLink>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon menuBar"><img src={menuBar} alt="Menu Bar" id='menuBar' /></span>
                </button>

                <div className="collapse navbar-collapse barraNav" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link estilos">Home</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/product/zapatillas" className="nav-link estilos">Zapatillas</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/product/ropa"  className="nav-link estilos">Ropa</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/Historia" className="nav-link estilos">Historia</NavLink>
                        </li>


                        <li className="nav-item">
                            <p className="nav-link estilos"><CartWidget /></p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default NavBar