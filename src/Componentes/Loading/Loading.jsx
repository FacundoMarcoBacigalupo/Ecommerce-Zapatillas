import React from 'react'
import shoe1 from '../../assets/images/shoe1.png'
import shoe2 from '../../assets/images/shoe2.png'
import shoe3 from '../../assets/images/shoe3.png'
import "./loading.css"



const Loading = () =>{
    return (
        <section id='loadingSection'>
            <h1><strong>Cargando datos...</strong></h1>
            <img src={shoe1} alt="Imagen de zapatilla" />
            <img src={shoe2} alt="Imagen de zapatilla" />
            <img src={shoe3} alt="Imagen de zapatilla" />
        </section>
    )
}




export default Loading