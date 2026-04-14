import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styles from './Navigate.module.css'
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Contact } from '../pages/Contact';
import { Shop } from '../pages/Shop';
import { DetailsProduct } from '../ui/DetailsProduct';
import { SelectedCategory } from '../ui/SelectedCategory';
import { getAssetPath } from '../utils/path';

export function Navigate() {
    return (
        <>
            <Router>
                <nav className={styles.navi}>
                    <img className={styles.logo} src={getAssetPath('images/logo.svg')}/>
                    <div className={styles.btns}>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/shop'><button>Shop</button></Link>
                        <Link to='/news'><button>News</button></Link>
                        <Link to='/contact'><button>Contact</button></Link>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/shop/:id' element={<DetailsProduct/>}/>
                    <Route path='/:id' element={<SelectedCategory/>}/>
                </Routes>
            </Router>
        </>
    )
}