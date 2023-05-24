import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '../Componentes/Context/CartContext'
import ItemListContainer from '../Pages/ItemListContainer/ItemListContainer'
import ItemDetallesContainer from '../Pages/ItemListContainer/ItemDetallesContainer/ItemDetallesContainer'
import NavBar from '../Componentes/NavBar/NavBar'
import Footer from '../Componentes/Footer/Footer'
import Home from '../Pages/Home/Home'
import Historia from '../Pages/Historia/Historia'
import Error404 from '../Pages/Error404/Error404'






const Rutas = () =>{

    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />

                    <Routes>
                        <Route exact path='/' element={<Home/>} />

                        <Route exact path="/product/:category" element={<ItemListContainer/>} />
                        <Route exact path='/item/:itemId' element={<ItemDetallesContainer/>} />

                        <Route exact path='/Historia' element={<Historia/>} />

                        <Route path='*' element={<Error404/>} />
                    </Routes>

                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}




export default Rutas