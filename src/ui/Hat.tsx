import style from '../pages/Shop.module.css'
import { getAssetPath } from '../utils/path'

type props = {
    namePage: string,
}

export function Hat ({namePage}: props) {
    return (
            <div className={style.hat} style={{backgroundImage: `url(${getAssetPath('images/backShop.svg')})`}}>
                <div className={style.txtHat}>
                    <h1>{namePage.toUpperCase()}</h1>
                    <p><b>Home &gt;</b> {namePage}</p>                
                </div>
            </div>
    )
}