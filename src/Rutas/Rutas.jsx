import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../Pages/ItemListContainer/ItemListContainer.jsx'
import ItemDetallesContainer from '../Pages/ItemListContainer/ItemDetallesContainer/ItemDetallesContainer.jsx'
import NavBar from '../Componentes/NavBar/NavBar.jsx'
import Footer from '../Componentes/Footer/Footer'
import Home from '../Pages/Home/Home.jsx'
import Historia from '../Pages/Historia/Historia.jsx'
import Error404 from '../Pages/Error404/Error404.jsx'
import Cart from '../Pages/Cart/Cart.jsx'
import Checkout from '../Componentes/Checkout/Checkout.jsx'




const Rutas = () =>{

    return (
        <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route exact path='/' element={<Home/>} />

                        <Route exact path='/product/:category' element={<ItemListContainer/>} />
                        <Route exact path='/item/:itemId' element={<ItemDetallesContainer/>} />

                        <Route exact path='/Historia' element={<Historia/>} />
                        
                        <Route exact path='/cart' element={<Cart/>} />
                        <Route exact path='/checkout' element={<Checkout/>} />

                        <Route path='*' element={<Error404/>} />
                    </Routes>
                <Footer />
        </BrowserRouter>
    )
}




export default Rutas