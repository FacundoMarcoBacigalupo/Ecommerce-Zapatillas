import stock from "./stock.json"

const products = stock




export  const getProducts = ()=>{
    return new Promise((resolve) => {
        resolve(products)})
}




export  const getDetailsProductsId = (ProductsId)=>{
    return new Promise((resolve) => {

        setTimeout (() =>{
            resolve( products.find(info=> info.id === ProductsId ))
        }, 800)
        })
}