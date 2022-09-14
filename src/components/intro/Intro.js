import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="container intro_container">
      <div className="intro_container-left">
        <h1 className="i-name">Nirajan Karki</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item"> Developer</div>
            <div className="i-title-item">Frontend</div>
            <div className="i-title-item">React</div>
            <div className="i-title-item">Javascript</div>
            <div className="i-title-item">Tech Student</div>
          </div>
        </div>
        <p className="i-desc">
          Hi, I am a passionate, self-taught React developer looking for
          entry-level job or any internship opportunities.
        </p>
      </div>
    </div>
  );
};

export default Intro;
