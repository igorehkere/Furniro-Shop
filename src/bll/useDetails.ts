import { useState, useEffect } from "react";
import { getDetails } from "../dal/api";

type infoProd = {
    id: string,
    name: string,
    description: string,
    price: number,
    images: Array<string>,
    rating: number,
}

export function useDetails (id: string | undefined) {
    const [product, setProduct] = useState<infoProd | null>(null);
    const [prodInCard, setProdInCard] = useState(false);
    
    useEffect(() => {
        getDetails(id).then(js => setProduct(js))
    }, [])
    return {product, prodInCard, setProdInCard}
}