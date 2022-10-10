import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-edit">
      <div className="navlinks">
        <h3 className="logo">Paul Israel</h3>
        <ul className="nav-tabs">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
