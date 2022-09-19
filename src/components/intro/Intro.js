import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="container intro_container">
      <div className="intro_container-left">
        <h1 className="i-name">Nirajan Karki</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item"> Utvikler</div>
            <div className="i-title-item">Frontend</div>
            <div className="i-title-item">React</div>
            <div className="i-title-item">Javascript</div>
            <div className="i-title-item">Tech Student</div>
          </div>
        </div>
        <p className="i-desc">
          Hei jeg er en selvlært frontend-utvikler som ser etter junior frontend
          jobb eller praksismuligheter.
        </p>
      </div>
    </div>
  );
};

export default Intro;
