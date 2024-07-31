import React from "react";
import FData from "./FooterData";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer_logo">
        NIRAJAN
      </Link>

      <div className="footer_container">
        {FData.map((item) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.link}
            >
              <img src={item.img} alt="" />
            </a>
          );
        })}
      </div>

      <div className="footer_copyright">
        <p className="copyright">&copy; Nirajan Karki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
