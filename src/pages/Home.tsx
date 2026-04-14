import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { Support } from '../ui/Support'
import { Categories } from '../ui/Categories'
import { getAssetPath } from '../utils/path'

export function Home() {
    return (
        <>
            <div className={styles.allHome} style={{backgroundImage: `url(${getAssetPath('images/backMain.svg')})`}}>
                <div className={styles.wind}>
                    <h3>New Arrival</h3>
                    <h1>Discover Our</h1>
                    <h1>New Collection</h1>
                    <p>The most stylish items in our new AI collection. Hurry up and buy them.</p>
                    <Link to='/shop'><button>BUY NOW</button></Link>
                </div>
            </div>   
            <Categories/>
            <Support/>     
        </>

    )
}