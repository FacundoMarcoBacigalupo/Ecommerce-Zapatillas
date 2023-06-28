import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImgError404 from '../../assets/images/Error404.jpg'
import "./Error404.css"




const Error404 = () => {

    const navigate= useNavigate()

    return (
        <section className='pagina404'>
            <h1><strong>Error 404</strong></h1>
            <p>La pagina que busca no existe, vuelva a la anterior</p>

            <button style={{width:"90%"}} className='efectoBoton' onClick={()=> navigate(-1)}>Volver</button>

            <picture>
                <img src={ImgError404} alt="Foto de Error 404" />
            </picture>
        </section>
    )
}




export default Error404