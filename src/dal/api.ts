const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) return undefined
    return {
        'X-Api-Key': apiKey,
    }
}

export function getNews (activeFindBut: string) {
    const promise = fetch(`https://newsapi.org/v2/everything?q=${activeFindBut}`, {
            method: 'GET',
            headers: prepareHeaders(),
    }).then(res => res.json());
    return promise;
}

export function getClothes (changePage: number) {
    const promise = fetch(`https://clothapi.progskill.ru/v1/products?page=${changePage}`).then(res => res.json());
    return promise;
}

export function getCategories () {
    const promise = fetch('https://clothapi.progskill.ru/v1/categories').then(res => res.json());
    return promise;
}

export function getDetails (id: string | undefined) {
    const promise = fetch(`https://clothapi.progskill.ru/v1/products/${id}`).then(res => res.json());
    return promise;
}