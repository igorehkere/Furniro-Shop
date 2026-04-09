import style from './Categories.module.css'
import { useCategories } from '../bll/useCategories'

export function Categories () {

    const {categories} = useCategories();
    if (categories === null) {
        return (
            <div className={style.loading}>
                <img src='./src/download.gif'/>
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
                        imgCard = './src/t-short.jpeg';
                    } else if (category.name === 'Худи') {
                        imgCard = './src/hoodie.jpeg';
                    } else if (category.name === 'Куртки') {
                        imgCard = './src/coat.jpeg';
                    }
                    return (
                        <div className={style.card} key={category.id}>
                            <img src={imgCard}/>
                            <p>{category.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}