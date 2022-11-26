import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="container intro_container" id="home">
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
      </div>
    </div>
  );
};

export default Intro;
