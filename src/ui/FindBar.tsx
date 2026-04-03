import style from './NewsList.module.css'

export function FindBar () {
    return (
        <div className={style.bar}>
            <input value='iphone'/>
            <img src='./src/searchIcon.svg'/>
        </div>
    )
}