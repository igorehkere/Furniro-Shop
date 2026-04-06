import { useState, useEffect } from "react";
import { getNews } from "../dal/api";

export type art = {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
}

export function useNews() {
    const [news, setNews] = useState<null | Array<art>>(null);
    const [activeFindBut, setActiveFindBut] = useState('');
    const [isLoading, setIsLoading] = useState(false);
        
    useEffect(() => {
        if (activeFindBut === '') return
        setIsLoading(true)
        getNews(activeFindBut).then(js => {
            setNews(js.articles);
            setIsLoading(false);
        })
    }, [activeFindBut])
    return {news, setNews, activeFindBut, setActiveFindBut, isLoading, setIsLoading}
}