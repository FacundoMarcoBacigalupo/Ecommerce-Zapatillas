import React, {Fragment} from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppCard from '../AppCard/AppCard'
import NikeAirForce from "../../Imagenes/NikeAirForce.png"
import Vans from "../../Imagenes/Vans.png"
import "./EstilosContainer.css"




export const ItemListContainer = () =>{

    return (
        <Fragment>
            <AppHeader titulo={"Nb Style"} />

            <AppCard titulo= "Nike" imagen= {NikeAirForce} price={15000} />

            <AppCard titulo= "Vans" imagen={Vans} price={11000} />
        </Fragment>
    )
}



export default ItemListContainer