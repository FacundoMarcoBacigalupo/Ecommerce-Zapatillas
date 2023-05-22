import Item from '../Item/Item'
import './ItemList.css'




const ItemList = ({products}) =>{

    return (
        <div className='posicionAppCard'>
            {products.map( (info) => <Item key={info.id} {...info} /> )}
        </div>
    )
}



export default ItemList