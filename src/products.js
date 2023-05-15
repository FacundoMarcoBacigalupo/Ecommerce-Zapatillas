import stock from "./stock.json"
const products = stock




export  const obtenerProducts = ()=>{
    return new Promise((resolve) => {
        resolve(products)})
}




export  const obtenerDetallesProducts = (ProductsId)=>{
    return new Promise((resolve) => {

        setTimeout (() =>{
            resolve( products.find(info=> info.id === ProductsId ) )
        }, 800)
        })
}