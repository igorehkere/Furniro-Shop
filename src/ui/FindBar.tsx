import { useState } from 'react'
import style from './NewsList.module.css'
import { getAssetPath } from '../utils/path';

type props = {
    handleChangeBut: (str: string) => void
}

export function FindBar ({handleChangeBut}:props) {
    const [find, setFind] = useState('');
 
    return (
        <div className={style.bar}>
            <input 
                onChange={(e) => {setFind(e.target.value)}}
                
                />
            <img src={getAssetPath('images/searchIcon.svg')} onClick={() => {
                handleChangeBut(find);
            }}/>
        </div>
    )
}