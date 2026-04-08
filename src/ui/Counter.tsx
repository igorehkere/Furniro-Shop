import { useState } from "react"
import style from './DetailsProduct.module.css'


export function Counter () {
    const [count, setCount] = useState(1);
    return (
        <div className={style.counter}>
            <button onClick={() => {
                if (count !== 1) {
                    setCount(count - 1);
                }
                
            }}>-</button>
            <p>{count}</p>
            <button onClick={() => {
                if (count !== 10) {
                    setCount(count + 1);
                }
                
            }}>+</button>
        </div>
    )
}