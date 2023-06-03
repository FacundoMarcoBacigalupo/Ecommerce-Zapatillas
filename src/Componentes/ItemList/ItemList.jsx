import { memo } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import './ItemList.css'




const ItemList = memo(({ products }) =>{

    return (
        <div className='posicionAppCard'>
            {
                products.length > 0
                ? products.map(data => <Item key={data.id} {...data} />)
                : <Loading/>
            }
        </div>
    )
},(prevProps, nextProps) => prevProps.products === nextProps.products);


export default ItemList