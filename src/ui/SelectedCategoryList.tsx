import style from './SelectedCategory.module.css'
import { ProductItem } from './ProductItem';
import { Link } from 'react-router-dom';
import { useSelectCategory } from '../bll/useSelectCategory';
import { getAssetPath } from '../utils/path';

type props = {
    id: string | undefined,
    page: number,
}

export function SelectedCategoryList({id, page}: props) {
    const {productCategory} = useSelectCategory({id, page});

    if (productCategory === null) {
        return (
            <div className={style.loading}>
                <img src={getAssetPath('images/download.gif')}/>
            </div>
        )
    }
    return (
        <div className={style.prodCards}>
            {productCategory.data.map((product) => {
                return (
                    <Link to={`/shop/${product.id}`} key={product.id}>
                        <ProductItem product={product}/>
                    </Link>
                )
            })} 
        </div>
    )
}