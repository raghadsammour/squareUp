import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logo from '../../assets/imgs/Footer/logo.svg';
import emailIcon from '../../assets/imgs/Footer/gmail.svg';
import phoneIcon from '../../assets/imgs/Footer/call.svg';
import locationIcon from '../../assets/imgs/Footer/icon.svg';
import facebookIcon from '../../assets/imgs/Footer/facebook.svg';
import twitterIcon from '../../assets/imgs/Footer/twitter.svg';
import instagramIcon from '../../assets/imgs/Footer/instagram.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-divider"></div>

                    <div className="footer-left">
                        <Link to="/">
                            <img src={logo} alt="SquareUp Logo" className="footer-logo" />
                        </Link>
                    </div>
                    <div className="footer-divider"></div>

                    <div className="footer-center">
                        <nav className="footer-links">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/services" className="footer-link">Services</Link>
                            <Link to="/work" className="footer-link">Work</Link>
                            <Link to="/process" className="footer-link">Process</Link>
                            <Link to="/about" className="footer-link">About</Link>
                            <Link to="/careers" className="footer-link">Careers</Link>
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </nav>
                    </div>

                    <div className="footer-right footer-right-wrapper">
                        <span className="social-text">Stay Connected</span>
                        <div className="social-links">
                            <a href="#facebook" aria-label="Facebook">
                                <img src={facebookIcon} alt="Facebook" />
                            </a>
                            <a href="#twitter" aria-label="Twitter">
                                <img src={twitterIcon} alt="Twitter" />
                            </a>
                            <a href="#instagram" aria-label="Instagram">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-contact">
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email" className="contact-icon" />
                            <span>hello@squareup.com</span>
                        </div>
                        <div className="contact-item">
                            <img src={phoneIcon} alt="Phone" className="contact-icon" />
                            <span>+91 9883 23 2309</span>
                        </div>
                        <div className="contact-item">
                            <img src={locationIcon} alt="Location" className="contact-icon" />
                            <span>Somewhere in the World</span>
                        </div>
                    </div>

                    <div className="copyright">
                        &copy; {new Date().getFullYear()} SquareUp. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
