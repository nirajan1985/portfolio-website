import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="container nav_container">
      <h3 className="logo">NIRAJAN KARKI</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <a href="#" className="takeaway">
          <li>HOME</li>
        </a>
        <a href="#project" className="takeaway">
          <li>PROJECT</li>
        </a>
        <a href="#certificate" className="takeaway">
          <li>CERTIFICATE</li>
        </a>
        <a href="#skills" className="takeaway">
          <li>SKILLS</li>
        </a>
        <a href="#contact" className="takeaway">
          <li>CONTACT</li>
        </a>
      </ul>

      {
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      }
    </nav>
  );
};

export default Navbar;
