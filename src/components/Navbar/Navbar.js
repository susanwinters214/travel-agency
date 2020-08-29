import React from "react";
import logo from "../../travelAgency.png";
import "./navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            View Entire List
          </a>
        </li>
        
      </ul>
    </nav>
  );
}
