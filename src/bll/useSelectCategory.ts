import { useState, useEffect } from "react";
import type { prod } from "./useProducts";

type productCat = {
    data: Array<prod>,
    page: number,
    has_next: boolean,
    total_pages: number
}
type categoryHook = {
    id: string | undefined,
    page: number,
}

export function useSelectCategory ({id, page}: categoryHook) {
    const [productCategory, setProductCategory] = useState<null | productCat>(null);
    
    useEffect(() => {
        setProductCategory(null)
        fetch(`https://clothapi.progskill.ru/v1/products?page=${page}&category_id=${id}`).then(res => res.json()).then(js => setProductCategory(js));
    }, [page])
    return {productCategory}
}