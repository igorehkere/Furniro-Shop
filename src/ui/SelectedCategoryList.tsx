import style from './SelectedCategory.module.css'
import { useState, useEffect } from 'react';
import type { prod } from '../bll/useProducts';
import { ProductItem } from './ProductItem';

type productCat = {
    data: Array<prod>,
    page: number,
    has_next: boolean,
    total_pages: number
}
type props = {
    id: string | undefined,
    page: number,
}

export function SelectedCategoryList({id, page}: props) {
    const [productCategory, setProductCategory] = useState<null | productCat>(null);

    useEffect(() => {
        setProductCategory(null)
        fetch(`https://clothapi.progskill.ru/v1/products?page=${page}&category_id=${id}`).then(res => res.json()).then(js => setProductCategory(js));
    }, [page])

    if (productCategory === null) {
        return (
            <div className={style.loading}>
                <img src='/src/download.gif'/>
            </div>
        )
    }
    return (
        <div className={style.prodCards}>
            {productCategory.data.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductItem product={product}/>
                    </div>
                )
            })} 
        </div>
    )
}