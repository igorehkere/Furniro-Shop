import { useState, useEffect } from "react";
import { getCategories } from "../dal/api";

type categor = {
    id: string,
    name: string,
}

export function useCategories () {
    const [categories, setCategories] = useState<null | Array<categor>>(null);
    
    useEffect(() => {
        getCategories().then(js => setCategories(js.data));
    }, [])
    return {categories};
}