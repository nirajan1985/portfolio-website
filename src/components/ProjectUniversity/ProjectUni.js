import React from "react";
import "./ProjectUni.css";
import Udata from "./ProjectUniData";

const ProjectUni = () => {
  return (
    <section>
      <h1 className="p-heading">University Projects</h1>

      <div className="container prouni_container">
        {Udata.map((item) => {
          return (
            <article className="prouni_item">
              <div className="prounifolio_item-image">
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="prouni_btns">
                <a className="btn" href={item.demo_link} target="_blank">
                  Demo
                </a>
                <a className="btn" href={item.github_link} target="_blank">
                  Code
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectUni;
