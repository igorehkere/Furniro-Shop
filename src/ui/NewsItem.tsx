import style from './NewsList.module.css'
import type { art } from '../bll/useNews';
import { getAssetPath } from '../utils/path';

type props = {
    newItem: art,
}

export function NewsItem({newItem}: props) {
    const date = new Date(newItem.publishedAt);
    return (
        <div className={style.post}>
            <img src={newItem.urlToImage}/>
            <div className={style.reaction}>
                <img src={getAssetPath('images/userLogo.svg')}/>
                <p>{newItem.author}</p>
                <img src={getAssetPath('images/calendarLogo.svg')}/>
                <p>{date.toLocaleString()}</p>
            </div>
            <p className={style.title}>{newItem.title}</p>
            <p className={style.description}>{newItem.description}</p>
            <p className={style.url}><a href={newItem.url}>Read more</a></p>
            <hr/>
        </div>
    )
}