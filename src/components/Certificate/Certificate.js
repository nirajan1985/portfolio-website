import React from "react";
import "./Certificate.css";
import certification from "../../img/certification.jpg";

const Certificate = () => {
  return (
    <section id="certificate">
      <h1>Certifications</h1>

      <div className="container certificate_container">
        <img src={certification} alt="" />
      </div>
    </section>
  );
};

export default Certificate;
