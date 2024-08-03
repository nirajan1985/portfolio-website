import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="container nav_container">
      <a href="#">
        <h3 className="logo">NIRAJAN KARKI</h3>
      </a>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <a href="#home">
          <li>HOME</li>
        </a>
        <a href="#project">
          <li>PROSJEKT</li>
        </a>
        <a href="#certificate">
          <li>SERTIFISERING</li>
        </a>
        <a href="#skills">
          <li>FERDIGHETER</li>
        </a>
        <a href="#contact">
          <li>KONTAKT</li>
        </a>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
