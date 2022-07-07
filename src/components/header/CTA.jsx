import React from "react";
import Resume from "../../assets/MorfinLuis_SoftwareEngineerResume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} target="_blank" className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
