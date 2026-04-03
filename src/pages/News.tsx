import { Hat } from "../ui/Hat"
import { Support } from "../ui/Support"
import { NewsList } from "../ui/NewsList"

export function News() {
    return (
        <div>
            <Hat namePage='news'/>
            <NewsList/>
            <Support/>
        </div>
    )
}