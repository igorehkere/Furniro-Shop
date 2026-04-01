import style from './ProductList.module.css'

export function Support() {
    return (
        <div className={style.sup}>
            <img src='./src/highQuantity.svg'/>
            <img src='./src/warranty.svg'/>
            <img src='./src/free.svg'/>
            <img src='./src/support.svg'/>
        </div>
    )
}