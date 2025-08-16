import React from "react";
import "./section.css";

function AboutSection() {
  return (
    <div className="container padding">
      <div className="text">
        <h1>About SquareUP</h1>
        <p>
          SquareUp is a digital product agency that is passionate about crafting
          exceptional digital experiences. We specialize in design, engineering,
          and project management, helping businesses thrive in the digital
          landscape. At SquareUp, we follow a structured and collaborative process
          to ensure the successful delivery of exceptional digital products. Our
          process combines industry best practices, creative thinking, and a
          client-centric approach.
        </p>
      </div>

      <div className="img">
        <img
          className="hero"
          src="./assets/img/aboutimg.png"
          alt="About section"
        />
        <div className="logo">
          <img
            className="iconAbout"
            src="./assets/img/logo.svg"
            alt="imagesection"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
