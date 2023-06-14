import React from "react";
import "./Skill.css";
import Sdata from "./SkillData";

const Skill = () => {
  return (
    <section id="skills">
      <h1>Frontend</h1>

      <div className="container skills_container">
        {Sdata.map((item, index) => {
          return (
            <div className="skills_container-item" key={item.index}>
              <div>
                <img src={item.logo} alt="" />
              </div>
              <p>{item.skillName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
