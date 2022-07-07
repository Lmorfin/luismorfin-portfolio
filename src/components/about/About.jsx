import React from "react";
import "../../styles/about.css";
import "../../styles/query/_about-query.css";
import ME from "../../assets/download.png";
import { ImLocation2 } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="LuisMorfin" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>
                Computer Science B.S., California State University East Bay
              </small>
            </article>

            <article className="about__card">
              <ImLocation2 className="about__icon" />
              <h5>Located In </h5>
              <small>The Bay Area, San Jose, CA </small>
            </article>

            <article className="about__card">
              <RiComputerLine className="about__icon" />
              <h5>Interested In</h5>
              <small>Front-End Development and iOS Development</small>
            </article>
          </div>

          <p className="about-text">
            I graduated from CSU East Bay in May 2022, I'm a first generation
            Latino originally from Mexico. I grew up in the East Side of San
            Jose, CA. I have experience with iOS Development and also Front-End.
            I am actively seeking for career opportunities to grow and apply my
            skills in the Software field.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
