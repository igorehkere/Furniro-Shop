import { useParams } from "react-router-dom";
import style from './DetailsProduct.module.css'
import { ProductGallery } from "./ProductGallery";
import { Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Support } from "./Support";
import { useDetails } from "../bll/useDetails";
import { getAssetPath } from "../utils/path";

export function DetailsProduct () {
    const {id} = useParams();
    const {product, prodInCard, setProdInCard} = useDetails(id);
    console.log(product);
    
    if (product === null) {
        return (
            <div className={style.loading}>
                <img src={getAssetPath('images/download.gif')}/>
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
                        <button className={style.add} style={{backgroundColor: prodInCard ? 'rgb(201, 201, 201)' : 'white'}} onClick={() => {
                            if (prodInCard) {
                                alert('Товар успешно удален из корзины')
                            } else {
                                alert('Товар успешно добавлен в корзину')
                            }
                            setProdInCard(!prodInCard);
                            
                        }}>{prodInCard ? 'In Cart' : 'Add to Cart'}</button>
                    </div>
                    
               </div>
            </div>
            <Support/>
            
        </div>
        
    )
}