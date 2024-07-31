import React from "react";
import "./Project.css";
import Data from "./ProjectData";

const Project = () => {
  return (
    <section id="project">
      <h1 className="p-heading">Prosjekter</h1>

      <div className="container portfolio_container">
        {Data.map((item) => {
          return (
            <article className="portfolio_item" key={item.id}>
              <div className="portfolio_item-image">
                <img src={item.image} alt="" />
              </div>
              <div className="desc">
                <h3>{item.title}</h3>
                <p className="text">{item.desc}</p>
                <p className="skills">
                  <strong>Skills:</strong> {item.skills}
                </p>
              </div>
              <div className="portfolio_btns">
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
                  href={item.github_link}
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

export default Project;
