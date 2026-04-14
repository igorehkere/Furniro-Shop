import { useState } from "react";
import { useParams } from "react-router-dom";
import style from './SelectedCategory.module.css';
import { Link } from "react-router-dom";
import { SelectedCategoryList } from "./SelectedCategoryList";
import { PageBar } from "./PageBar";

export function SelectedCategory () {
    const {id} = useParams();

    const [page, setPage] = useState(1);
    const getPage = (pg: number) => {
        setPage(pg);
    } 
    let category = '';
    if (id === '02966ea0-7f83-42bb-a9a3-51e83fc03621') {
        category = 'Футболки';
    } else if (id === 'e7c8f204-2b8d-4871-9249-055d919c32ce') {
        category = 'Худи';
    } else {
        category = 'Куртки';
    }

    

   
    return (
        <div className={style.tool}>
            <nav className={style.toolBar}>
                <Link to='/'><p>Home</p></Link>
                <span>&gt;</span>
                <p>{category}</p>
                <span>&gt;</span>
                <div>
                    <PageBar getPage={getPage} maxPages={3}/>
                </div>
                
            </nav>
            <SelectedCategoryList id={id} page={page}/>
            
        </div>
    )
}