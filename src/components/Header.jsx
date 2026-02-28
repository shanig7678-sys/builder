import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src="./assets/logo.svg" alt="logo" />
                    <h2>Business Construction</h2>
                </Link>
            </div>
            <nav className={isMenuOpen ? 'nav-open' : ''}>
                <ul className="nav-bar">
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
        </header >
    )
}

export default Header
