import React from "react";
import "../../styles/footer.css";
import HeaderSocials from "../header/HeaderSocials";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Luis Morfin
      </a>
      <HeaderSocials />
      <hr className="divider" />

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <hr className="divider" />
    </footer>
  );
};

export default Footer;
