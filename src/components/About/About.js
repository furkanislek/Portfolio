import React from "react";
import "./about.css";
import logo from "./img/logo.png";

function About() {
  return (
    <div className="aboutClass">
      <div className="imagesAbout">
        <img
          src={logo}
          alt="Logo"
          style={{
            resizeMode: "cover",
            height: 200,
            width: 200,
          }}
        />
      </div>
      <div className="textAbout">
        <h1>Hi, There</h1>
        <h2>I am Furkan.</h2>
        <h3>I am a Front-End Developer</h3>
      </div>
    </div>
  );
}

export default About;
