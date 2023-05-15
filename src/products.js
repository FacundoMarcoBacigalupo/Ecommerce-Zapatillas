const products = [
    {
        id: "1",
        img: "./assets/images/NikeAirForce.jpg",
        name: "Nike Air Force",
        description: "Zapatillas perfectas desde cualquier punto de vista, se puede hacer deporte con ellas hasta ir a una boda, y combinan con cualquier outfit.",
        stock: 15,
        precio: 15000
    },

    {
        id: "2",
        img: "./assets/images/Vans.jpg",
        name: "Vans",
        description: "Muy buenas zapatillas para usar en cualquier encuentro social y fácil de combinar con todo.",
        stock: 10,
        precio: 11000
    },

    {
        id: "3",
        img: "./assets/images/ConverseBotas.jpg",
        name: "Converse Botas",
        description: "Zapatillas sencillas, facheras, sirven casi todas las ocasiones y lo más importante fácil de combinar.",
        stock: 8,
        precio: 9000
    },
    
    {
        id: "4",
        img: "./assets/images/OjotasVansSlide.jpg",
        name: "Ojotas Vans Slide",
        description: "Ojotas Vans Slide, perfectas para la playa y para andar comod@ en casa.",
        stock: 4,
        precio: 6000
    },

    {
        id: "5",
        img: "./assets/images/NikeJordanAir.jpg",
        name: "Nike Jordan Air",
        description: "Nike Jordan Air, muy facheras, fáciles de combinar y perfectas para lucirlas en cualquier ámbito.",
        stock: 9,
        precio: 18000
    },

    {
        id: "6",
        img: "./assets/images/AdidasForum.jpg",
        name: "Adidas Forum",
        description: "Adidas Forum, elegantes y minimalistas, hechas para usar en casi cualquier ocasión.",
        stock: 12,
        precio: 17000
    }
]




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