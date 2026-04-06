import { useState } from "react";

export function usePageClothes (num: number) {
    const [changePage, setChangePage] = useState<number>(num);
    return { changePage, setChangePage }    
}