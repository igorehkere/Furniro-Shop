import style from './Categories.module.css'
import { useCategories } from '../bll/useCategories'
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/path';

export function Categories () {

    const {categories} = useCategories();
    if (categories === null) {
        return (
            <div className={style.loading}>
                <img src={getAssetPath('images/download.gif')}/>
            </div>
        )
    }
    return (
        <div className={style.cat}>
            <p className={style.title}>Categories</p>
            <div className={style.cards}>
                {categories.map((category) => {
                    let imgCard = '';
                    if (category.name === 'Футболки') {
                        imgCard = getAssetPath('images/t-short.jpeg');
                    } else if (category.name === 'Худи') {
                        imgCard = getAssetPath('images/hoodie.jpeg');
                    } else if (category.name === 'Куртки') {
                        imgCard = getAssetPath('images/coat.jpeg');
                    }
                    return (
                        <Link to={category.id} key={category.id}>
                            <div className={style.card}>
                                <img src={imgCard}/>
                                <p>{category.name}</p>
                            </div>
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    )
}