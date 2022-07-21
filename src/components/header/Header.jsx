import React from "react";
import "../../styles/header.css";
import CTA from "./CTA";
import HeaderSocials from "../header/HeaderSocials";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";

const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <header>
      <div className="container__header-container">
        <h3>Hello I'm</h3>
        <h1>Luis Morfin</h1>
        {/*<h4 class="text-light">Front-End Developer</h4>*/}
        <div className="me">
          <h2 class="text-light">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("").pauseFor(2500).start();
                typewriter.typeString("Front-End Developer").start();
              }}
            />
          </h2>
        </div>
        <CTA />

        {/* <HeaderSocials /> */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 650,
                },
                value: 50,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
            fullScreen: { enable: false },
          }}
        />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
