import { useState, useEffect } from "react"
import style from './NewsList.module.css'
import { NewsItem } from "./NewsItem";
import { FindBar } from "./FindBar";

export type art = {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
}

export function NewsList() {
    const [news, setNews] = useState<null | Array<art>>(null);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=iphone`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'e13a2e0a35f94b3e903efbc28345425e'
            }
        }).then(res => res.json()).then(js => setNews(js.articles))
    }, [])
    if (news === null) {
        return (
            <div className={style.loading}>
                <img src='./src/download.gif'/>
            </div>
        )
    }

    return (
        <div className={style.posts}>
            <div>
                {news.map((newItem) => {
                    return (
                        <NewsItem key={newItem.publishedAt} newItem={newItem}/>
                    )
                })}                
            </div>

            <FindBar/>
        </div>
    )
}