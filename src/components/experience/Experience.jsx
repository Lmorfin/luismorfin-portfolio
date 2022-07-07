import React from "react";
import "../../styles/experience.css";
import "../../styles/query/_experience-query.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience__skill">
          <h2>Languages: </h2>
          <h5>Languages: </h5>
          <div className="experience__content">
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
              />
              {/* <figcaption>Java</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
              />
              {/* <figcaption>C++</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="C"
              />
              {/* <figcaption>C</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              {/* <figcaption>JavaScript</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML"
              />
              {/* <figcaption>HTML5</figcaption> */}
            </div>

            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="CSS"
              />
              {/* <figcaption>CSS3</figcaption> */}
            </div>
          </div>
        </div>

        <div className="experience__skill">
          <h2>Technologies:</h2>
          <h5>Technologies:</h5>
          <div className="experience__content">
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
              />
              {/* <figcaption>React.JS</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="Sass"
              />
              {/* <figcaption>Sass</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
                alt="MaterialUI"
              />
              {/* <figcaption>MaterialUI</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
              {/* <figcaption>MySQL</figcaption> */}
            </div>
          </div>
        </div>

        <div className="experience__skill">
          <h2>Dev Tools:</h2>
          <h5>Dev Tools:</h5>
          <div className="experience__content">
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="Git"
              />
              {/* <figcaption>Git</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                alt="VSCode"
              />
              {/* <figcaption>VS Code</figcaption> */}
            </div>
            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg"
                alt="Unity"
              />
              {/* <figcaption>Unity</figcaption> */}
            </div>

            <div className="skill-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-plain.svg"
                alt="xCode"
              />
              {/* <figcaption>xCode</figcaption> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container experience__work">
        <div className="work__content">
          <h3>Work Experience:</h3>
          <div className="position">
            <h3>Research Assistant and Developer</h3>
            <h3>Mission College | Santa Clara, CA July 2020 - Sept 2020</h3>
          </div>
          <article className="work__details">
            <ul>
              <h3>Wind Turbine Adventure Game</h3>
              <li>
                ● Developed a first person 3D educational game to teach students
                about wind power engineering concepts.
              </li>
              <li>
                ● Implemented C# scripts that handled button pressing and game
                interactions.
              </li>
              <li>
                <b>● Technologies:</b> Unity Game Engine, C#, Microsoft Visual
                Studio, SketchUp, Blendr
              </li>
            </ul>

            <ul>
              <h3>VR Game Development Tutorials</h3>
              <li>
                ● Created VR project based tutorial videos that covered
                collision detection and user interactions.
              </li>
              <li>
                ● Explained step by step how to create a Crosshair UI used in
                the popular FPS games.
              </li>
              <li>
                ● Demonstrated how to create a World Space UI similar to VRChat.
              </li>
              <li>
                <b>● Technologies:</b> Unity Game Engine, C#, Microsoft Visual
                Studio, Adobe Premiere Pro, OBS Studio
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
