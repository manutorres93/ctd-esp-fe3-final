import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-title">
          <span className="navbar-title-d">D</span>H Odonto
        </span>
        <img src="/DH.ico" alt="Odonto Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button className="theme-button">
        <img src="/favicon.ico" alt="Change Theme" />
      </button>
    </nav>
  );
};

export default Navbar;