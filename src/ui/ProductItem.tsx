import style from './ProductItem.module.css'
import type { prod } from '../bll/useProducts';

type props = {
    product: prod,
}

export function ProductItem ({product}: props) {
    const url = 'https://clothapi.progskill.ru';
    return (
        <div className={style.item}>
            <img src={url + product.images[0]}/>
            <div className={style.desc}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                        
            </div>
            <div className={style.price}>
                <h3>₽ {product.price}</h3>    
            </div>
        </div>
    )
}
