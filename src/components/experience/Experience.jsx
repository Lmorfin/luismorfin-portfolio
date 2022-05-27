import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience__skill">
          <h3>Key Technologies:</h3>
          <div className="experience__content">
            <article className="experience_details">
              <h4>C++</h4>
              <h4>Java</h4>
              <h4>HTML/CSS</h4>
              <h4>Javascript</h4>
              <h4>Reactjs</h4>
            </article>
          </div>
        </div>

        <div className="experience__skill">
          <h3>Familiar with:</h3>
          <div className="experience__content">
            <article className="experience_details">
              <h4>Swift</h4>
              <h4>C#</h4>
              <h4>C</h4>
              <h4>MySQL</h4>
            </article>
          </div>
        </div>

        <div className="experience__skill">
          <h3>Dev Tools:</h3>
          <div className="experience__content">
            <article className="experience_details">
              <h4>Visual Studio Code</h4>
              <h4>XCode</h4>
              <h4>Unity Game Engine</h4>
              <h4>Git</h4>
              <h4>Eclipse</h4>
            </article>
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
}

export default Experience