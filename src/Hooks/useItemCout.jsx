import { useState } from 'react'



const useItemCout = (initial, stock) => {
    const [cantidad, setCantidad] = useState(initial)


    const sumar = () =>{
        if (cantidad < stock)
        setCantidad(cantidad + 1);  
    }

    const restar = () =>{
        if (cantidad >= 1)
        setCantidad(cantidad - 1);
    }


    return {
        cantidad,
        sumar,
        restar
    }
}



export default useItemCout