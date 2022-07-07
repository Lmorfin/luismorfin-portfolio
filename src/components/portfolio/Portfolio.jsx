import React from "react";
import "../../styles/portfolio.css";
import "../../styles/query/_portfolio-query.css";
import FLIX from "../../assets/flix-screenshot.png";
import IG from "../../assets/instagram.png";
import RECIPIE from "../../assets/recipie.png";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FLIX} alt="flix-app" />
          </div>
          <h3>Flix - iOS</h3>
          <h5>Flix - iOS</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lmorfin/Flix"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IG} alt="IG-app" />
          </div>
          <h3>Instagram Clone - iOS</h3>
          <h5>Instagram Clone - iOS</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lmorfin/InstagramClone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RECIPIE} alt="recipie" />
          </div>
          <h3>ReciPie - iOS</h3>
          <h5>ReciPie - iOS</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Reci-Pie-Team/Reci-Pie"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
