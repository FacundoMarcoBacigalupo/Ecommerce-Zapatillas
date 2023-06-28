import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import swal from "sweetalert2"
import "./CheckoutForm.css"




const CheckoutForm = ({ onConfirm }) => {
    const { allFull } = useCartContext()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")



    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        if (allFull([name, phone, email])) {
            swal.fire({
                title: "Oops!",
                text: "Faltan campos por llenar",
                icon: "error",
            })
            return
        }
        swal.fire({
                title: "Genial!",
                text: "Su orden de compra se envio correctamente",
                icon: "success",
        })

        onConfirm(userData)
    }





    return (
        <main id="containerForm">
            <form className="form" onSubmit={handleConfirm}>
                <h1 id="titleForm">Verificar</h1>
                <div className="input-container ic1">
                    <input className="input" placeholder=" " type="text" value={name} onChange={({ target }) => setName(target.value)} />
                    <div className="cut"></div>
                    <label className="placeholder">Nombre</label>
                </div>


                <div className="input-container ic2">
                    <input className="input" placeholder=" " type="number" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    <div className="cut"></div>
                    <label className="placeholder">Celular</label>
                </div>


                <div className="input-container ic2">
                    <input className="input" placeholder=" " type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Email</label>
                </div>

                <button type='submit' className='botonForm'>Crear orden</button>
            </form>
        </main>
    )
}



export default CheckoutForm