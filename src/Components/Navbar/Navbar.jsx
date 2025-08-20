import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/imgs/nav/Logo2.svg';
import hamburger from '../../assets/imgs/nav/hamburger.svg';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Squareup logo" className="navbar-logo" />
                </Link>
            </div>

            <div className="navbar-center">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/work" className="nav-link">Work</Link>
                <Link to="/process" className="nav-link">Process</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/admin" className="nav-link">Edit</Link>
            </div>

            <div className="navbar-right">
                <Link to="/contact">
                    <button className="navbar-button">Contact Us</button>
                </Link>
                <button
                    className="navbar-hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img src={hamburger} alt="Menu" />
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/work" className="nav-link">Work</Link>
                <Link to="/process" className="nav-link">Process</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/admin" className="nav-link">Edit</Link>
                <Link to="/contact">
                    <button className="navbar-button">Contact Us</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;