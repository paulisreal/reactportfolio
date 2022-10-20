import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-edit">
      <div className="navlinks">
        <h3 className="logo">Paul Israel</h3>
        <ul className="nav-tabs">
          <li ><a href="#">Home</a></li>
          <li ><a href="#">Work</a></li>
          <li ><a href="#">About</a></li>
          <li ><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
