import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/nav/Logo2.svg";
import hamburger from "../../assets/imgs/nav/hamburger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("currentUser");
      if (stored) setCurrentUser(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    const handleUserUpdated = (e) => {
      try {
        const stored = localStorage.getItem("currentUser");
        setCurrentUser(stored ? JSON.parse(stored) : null);
      } catch {
        setCurrentUser(null);
      }
    };
    window.addEventListener("user:updated", handleUserUpdated);
    return () => window.removeEventListener("user:updated", handleUserUpdated);
  }, []);

  const label = currentUser?.name || "Contact Us";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Squareup logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/work" className="nav-link">
          Work
        </Link>
        <Link to="/process" className="nav-link">
          Process
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>

        <Link to="/dash" className="nav-link">

     {/* <Link to="/admin" className="nav-link"> */}

          Edit
        </Link>
      </div>

      <div className="navbar-right">
        {currentUser ? (
          <button className="navbar-button" disabled>
            {label}
          </button>
        ) : (
          <Link to="/contact">
            <button className="navbar-button">{label}</button>
          </Link>
        )}
        <button
          className="navbar-hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={hamburger} alt="Menu" />
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/work" className="nav-link">
          Work
        </Link>
        <Link to="/process" className="nav-link">
          Process
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>

        <Link to="/dash" className="nav-link">

      {/* <Link to="/admin" className="nav-link"> */}

          Edit
        </Link>

        {currentUser ? (
          <button className="navbar-button" disabled>
            {label}
          </button>
        ) : (
          <Link to="/contact">
            <button className="navbar-button">{label}</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
