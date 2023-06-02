import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import './ItemList.css'




const ItemList = ({ products }) =>{

    return (
        <div className='posicionAppCard'>
            {
                products.length > 0
                ? products.map(info => <Item key={info.id} {...info} />)
                : <Loading/>
            }
        </div>
    )
}



export default ItemList