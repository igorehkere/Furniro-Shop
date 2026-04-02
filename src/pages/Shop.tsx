import { PageBar } from '../ui/PageBar'
import { ProductList } from '../ui/ProductList'
import { Support } from '../ui/Support'
import { useState } from 'react'
import { Hat } from '../ui/Hat'

export function Shop() {
    const [changePage, setChangePage] = useState<number>(1);
    const getPage = (page: number) => {
        setChangePage(page);
    }
    return (
        <div>
            <Hat namePage='shop'/>
            <PageBar getPage={getPage}/>
            <ProductList changePage={changePage}/>
            <Support/>
        </div>
    )
}