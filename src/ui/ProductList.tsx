import style from './ProductList.module.css'
import { ProductItem } from "./ProductItem";
import { useProducts } from "../bll/useProducts";

type props = {
    changePage: number,
}

export function ProductList({changePage}: props) {
    const {products} = useProducts(changePage);
    if (products === null) {
        return (
            <div className={style.loading}>
                <img src='./src/download.gif'/>
            </div>
        )
    }
    return (
        <div className={style.list}>
            {products.map((product) => {
                return (
                    <ProductItem key={product.id} product={product}/>
                )
            })}
        </div>
    )
}