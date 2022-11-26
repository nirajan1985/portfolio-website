import React from "react";
import "./ProjectHtml.css";
import Hdata from "./ProjectHtmlData";

const ProjectHtml = () => {
  return (
    <section>
      <h1 className="p-heading">HTML & CSS Prosjekter</h1>

      <div className="container prohtml_container">
        {Hdata.map((item) => {
          return (
            <article className="prohtml_item">
              <div className="prohtml_item-image">
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="prohtml_btns">
                <a
                  className="btn"
                  href={item.demo_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="btn"
                  href={item.code_link}
                  target="_blank"
                  rel="noreferrer"
                >
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
