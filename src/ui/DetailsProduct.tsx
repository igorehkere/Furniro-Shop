import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './DetailsProduct.module.css'
import { ProductGallery } from "./ProductGallery";
import { Link } from "react-router-dom";

type infoProd = {
    id: string,
    name: string,
    description: string,
    price: number,
    images: Array<string>,
    rating: number,
}

export function DetailsProduct () {
    const {id} = useParams();
    const [product, setProduct] = useState<infoProd | null>(null);

    useEffect(() => {
        fetch(`https://clothapi.progskill.ru/v1/products/${id}`).then(res => res.json()).then(js => setProduct(js))
    }, [])
    console.log(product);
    
    if (product === null) {
        return (
            <div className={style.loading}>
                <img src='/src/download.gif'/>
            </div>
        )
    }
    return (
        <div className={style.details}>
            <nav className={style.toolBar}>
                <Link to='/'><p>Home</p></Link>
                <span>&gt;</span>
                <Link to='/shop'><p>Shop</p></Link>
                <span>&gt;</span>
            </nav>
            <ProductGallery images={product.images}/>
        </div>
        
    )
}