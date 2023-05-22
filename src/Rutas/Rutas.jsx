import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../Componentes/ItemListContainer/ItemListContainer'
import NavBar from '../Componentes/NavBar/NavBar'
import Footer from '../Componentes/Footer/Footer'
import Home from '../Componentes/Home/Home'
import Historia from '../Componentes/Historia/Historia'
import ItemDetallesContainer from '../Componentes/ItemListContainer/ItemDetallesContainer/ItemDetallesContainer'
import Error404 from '../Error404/Error404'





const Rutas = () =>{

    return (
        <BrowserRouter>
            <NavBar />

                <Routes>
                    <Route exact path='/' element={<Home/>} />

                    <Route exact path="/product/:category" element={<ItemListContainer/>} />
                    <Route exact path='/item/:itemId' element={<ItemDetallesContainer/>} />

                    <Route exact path='/Historia' element={<Historia/>} />

                    <Route path='*' element={<Error404/>} />
                </Routes>

            <Footer />
        </BrowserRouter>
    )
}




export default Rutas