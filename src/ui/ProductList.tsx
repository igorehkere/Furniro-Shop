import { useState, useEffect } from "react"
import style from './ProductList.module.css'
import { ProductItem } from "./ProductItem";

type props = {
    changePage: number,
}
export type prod = {
    id: string,
    category_id: string,
    name: string,
    description: string,
    price: number,
    images: Array<string>,
}

export function ProductList({changePage}: props) {
    const [products, setProducts] = useState<null | Array<prod>>(null);
    useEffect(() => {
        setProducts(null)
        fetch(`https://clothapi.progskill.ru/v1/products?page=${changePage}`).then(res => res.json()).then(js => setProducts(js.data))
    }, [changePage])
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