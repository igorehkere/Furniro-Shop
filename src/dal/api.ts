

export function getNews (activeFindBut: string) {
    const promise = fetch(`https://newsapi.org/v2/everything?q=${activeFindBut}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'e13a2e0a35f94b3e903efbc28345425e'
            }
    }).then(res => res.json());
    return promise;
}

export function getClothes (changePage: number) {
    const promise = fetch(`https://clothapi.progskill.ru/v1/products?page=${changePage}`).then(res => res.json());
    return promise;
}