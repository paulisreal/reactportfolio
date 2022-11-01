import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="nav-edit">
      <div className="navlinks">
        <h3 className="logo">Paul Israel</h3>
            <ul className="nav-tabs">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
      </div>
        <div className="line"></div>
    </div>
  );
}

export default Navbar;
