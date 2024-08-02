import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="container nav_container">
      <h3 className="logo">NIRAJAN KARKI</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/certificate">SERTIFISERING</Link>
        </li>

        <li>
          <Link to="/skill">FERDIGHETER</Link>
        </li>

        <li>
          <Link to="/contact">KONTAKT</Link>
        </li>
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
