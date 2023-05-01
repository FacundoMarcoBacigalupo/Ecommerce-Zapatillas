import React from 'react'
import "./EstilosHeader.css"




export const AppHeader = ({titulo}) => {

    return (
            <div className="mt-4 p-5 bg-primary text-white rounded" id="estas">
                <h1 id='titulo'>{titulo}</h1>
                <p id='subTitulo'>Nb Style es un emprendimiento de venta de zapatillas réplicas de las marcas más famosas y accesibles económicamente.</p>
            </div>
    )
}



export default AppHeader