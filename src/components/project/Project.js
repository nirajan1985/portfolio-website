import React from "react";
import "./Project.css";
import Data from "./ProjectData";

const Project = () => {
  return (
    <section id="project">
      <h1 className="p-heading">React Prosjekter</h1>

      <div className="container portfolio_container">
        {Data.map((item) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="portfolio_btns">
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

export default Project;
