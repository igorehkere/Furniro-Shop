import { useState, useEffect } from "react";
import { getClothes } from "../dal/api";

export type prod = {
    id: string,
    category_id: string,
    name: string,
    description: string,
    price: number,
    images: Array<string>,
}

export function useProducts (changePage: number) {
    const [products, setProducts] = useState<null | Array<prod>>(null);
    useEffect(() => {
        setProducts(null)
        getClothes(changePage).then(js => setProducts(js.data))
    }, [changePage])
    return {products, setProducts}
}