import React from 'react'
import "./about.css"
import logo from "../../../public/logo.png"

function About() {
  return (
    <div className='aboutClass'> 
        <div className='textAbout'>
            <h1>Hi, There</h1>
            <h2>I am Furkan.</h2>
            <h3>I am a Front-End Developer</h3>
        </div>
        <div className='imagesAbout'>
        <img src={logo} alt="logo" /> 
        </div>
    </div>
  )
}

export default About