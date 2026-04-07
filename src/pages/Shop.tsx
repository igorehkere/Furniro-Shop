import { PageBar } from '../ui/PageBar'
import { ProductList } from '../ui/ProductList'
import { Support } from '../ui/Support'
import { Hat } from '../ui/Hat'
import { usePageClothes } from '../bll/usePageClothes'

export function Shop() {
    const {changePage, setChangePage} = usePageClothes(1);
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