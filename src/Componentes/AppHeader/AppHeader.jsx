import React from 'react'
import "./EstilosHeader.css"




export const AppHeader = ({titulo}) => {

    return (
            <div className="mt-4 p-5 bg-primary text-white rounded" id="estas">
                <h1 id='titulo'>{titulo}</h1>
            </div>
    )
}



export default AppHeader