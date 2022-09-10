import React from "react";
import "./ProjectHtml.css";
import Hdata from "./ProjectHtmlData";

const ProjectHtml = () => {
  return (
    <section>
      <h1 className="p-heading">HTML & CSS Projects</h1>

      <div className="container prohtml_container">
        {Hdata.map((item) => {
          return (
            <article className="prohtml_item">
              <div className="prohtml_item-image">
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="prohtml_btns">
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

export default ProjectHtml;
