import style from './Shop.module.css'
import { PageBar } from '../ui/PageBar'
import { ProductList } from '../ui/ProductList'
import { Support } from '../ui/Support'
import { useState } from 'react'

export function Shop() {
    const [changePage, setChangePage] = useState<number>(1);
    const getPage = (page: number) => {
        setChangePage(page);
    }
    console.log(changePage)
    return (
        <div>
            <div className={style.hat}>
                <div className={style.txtHat}>
                    <h1>SHOP</h1>
                    <p><b>Home</b> shop</p>                
                </div>
            </div>
            <PageBar getPage={getPage}/>
            <ProductList changePage={changePage}/>
            <Support/>
        </div>
    )
}