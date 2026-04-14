import style from './NewsList.module.css'
import { NewsItem } from "./NewsItem";
import { FindBar } from "./FindBar";
import { useNews } from "../bll/useNews";
import { getAssetPath } from '../utils/path';

export function NewsList() {
    const {news, setActiveFindBut, isLoading} = useNews();
    const handleChangeBut = (str: string) => {
        setActiveFindBut(str);
    }
    return (
        <div className={style.posts}>
            
            {isLoading && (
                    <div className={style.loading}>
                        <img src={getAssetPath('images/download.gif')} alt="Loading"/>
                    </div>
            )}
            <div>
                {!isLoading && news && news.map((newItem) => (
                    <NewsItem key={newItem.url} newItem={newItem}/>
                ))}
                {!isLoading && !news && <p className={style.noNews}>What news are you interested in?</p>}
            </div>
            <FindBar handleChangeBut={handleChangeBut}/>
            
        </div>
    )
}