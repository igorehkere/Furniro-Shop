import style from './ProductList.module.css'
import { ProductItem } from "./ProductItem";
import { useProducts } from "../bll/useProducts";
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/path';

type props = {
    changePage: number,
}

export function ProductList({changePage}: props) {
    const {products} = useProducts(changePage);
    if (products === null) {
        return (
            <div className={style.loading}>
                <img src={getAssetPath('images/download.gif')}/>
            </div>
        )
    }
    return (
        <div className={style.list}>
            {products.map((product) => {
                return (
                    <Link to={product.id} key={product.id} >
                        <ProductItem product={product}/>   
                    </Link>
                  
                )
            })}
        </div>
    )
}