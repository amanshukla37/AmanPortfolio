import React from "react";
import "./Hero.css";
// import round_image_aman from "../../assets/image.jpg";
import round_image_aman from "../../assets/img_head-fotor.png";
// import round_image_aman from "../../assets/WhatsApp_Image_2024-09-16_at_16.38.23_437fb110-removebg-preview.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={round_image_aman} alt="" />
      <h1>
        <span>I'm Aman Shukla,</span>frontend developer based in India.
      </h1>
      <p>
        I am a web developer specializing in ReactJS, NodeJS, and JavaScript,
        with a passion for building innovative and user-friendly applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
