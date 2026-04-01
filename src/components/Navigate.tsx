import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styles from './Navigate.module.css'
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Shop } from '../pages/Shop';

export function Navigate() {
    return (
        <>
            <Router>
                <nav className={styles.navi}>
                    <img className={styles.logo} src='./src/logo.svg'/>
                    <div className={styles.btns}>
                        <button><Link to='/'>Home</Link></button>
                        <button><Link to='/shop'>Shop</Link></button>
                        <button><Link to='/about'>About</Link></button>
                        <button><Link to='/contact'>Contact</Link></button>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </>
    )
}