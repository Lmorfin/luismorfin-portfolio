import React from "react";
import "../../styles/nav.css";
import "../../styles/query/_navMobile-query.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [navBar, setNavBar] = useState(false);

  //Changes navbar's bg color
  const changeBackground = () => {
    console.log(window.scrollY);

    if(window.scrollY >=500) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div >
      <div className={navBar ? "nav__wrapper" : "navbar-transparent"}>
        <nav className="nav-items">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            {/* <AiOutlineHome /> */}
            {"Home"}
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            {/* <HiIdentification /> */}
            {"About"}
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            {/* <GiGraduateCap /> */}
            {"Experience"}
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            {/* <BsCodeSlash /> */}
            {"Portfolio"}
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            {/* <RiContactsBook2Fill /> */}
            {"Contact Me"}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
