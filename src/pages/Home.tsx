import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.allHome}>
            <div className={styles.wind}>
                <h3>New Arrival</h3>
                <h1>Discover Our</h1>
                <h1>New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY NOW</button>
            </div>
        </div>
    )
}