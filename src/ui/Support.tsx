import style from './ProductList.module.css'
import { getAssetPath } from '../utils/path'

export function Support() {
    return (
        <div className={style.sup}>
            <img src={getAssetPath('images/highQuantity.svg')}/>
            <img src={getAssetPath('images/warranty.svg')}/>
            <img src={getAssetPath('images/free.svg')}/>
            <img src={getAssetPath('images/support.svg')}/>
        </div>
    )
}