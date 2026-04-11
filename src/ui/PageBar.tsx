import { useState } from 'react'
import style from '../pages/Shop.module.css'

type props = {
    getPage: (page: number) => void
    maxPages: number,
}

export function PageBar ({getPage, maxPages}: props) {
    const [page, setPage] = useState<number>(1);
    return (
            <div className={style.pageBar}>
                <button onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                        getPage(page - 1);
                    }
                }}>&lt;</button>
                <p>{page}</p>
                <button onClick={() => {
                    if (page < maxPages) {
                        setPage(page + 1);
                        getPage(page + 1);                        
                    }

                }}>&gt;</button>
            </div>      
    )
}