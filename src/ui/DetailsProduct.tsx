import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './DetailsProduct.module.css'
import { ProductGallery } from "./ProductGallery";
import { Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Support } from "./Support";

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
            <div className={style.card}>
               <ProductGallery images={product.images}/> 
               <div className={style.inform}>
                    <div>
                        <p className={style.title}>{product.name}</p>
                        <p className={style.price}>₽ {product.price}</p>
                        <p className={style.rating}>Рейтинг: {product.rating}</p>
                        <p className={style.description}>{product.description}</p>
                    </div>
                    
                    <div className={style.btns}>
                        <Counter/>
                        <button className={style.add}>Add to Cart</button>
                    </div>
                    
               </div>
            </div>
            <Support/>
            
        </div>
        
    )
}