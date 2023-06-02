import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'





const CheckoutForm = ({ onConfirm }) => {
    const { validateAllFull } = useCartContext()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")



    const handleConfirm = (evente) =>{
        evente.preventDefault()

        const userData = {
            name, phone, email
        }

        if (validateAllFull(userData)) {
            alert("No, mal")}

        onConfirm(userData)
    }





    return (
        <form onSubmit={handleConfirm}>
            <label className='labelForm'>
                Nombre
                <input type="text" value={name} onChange={({ target }) => setName(target.value)}/>
            </label>

            <label className='labelForm'>
                Celular
                <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)}/>
            </label>

            <label className='labelForm'>
                Email
                <input type="text" value={email} onChange={({ target }) => setEmail(target.value)}/>
            </label>

            <button type='submit' className='efectoBoton'>Crear orden</button>
        </form>
    )
}



export default CheckoutForm