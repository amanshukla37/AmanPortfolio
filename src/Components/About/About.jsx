import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/2nd_image.jpg";
// import profile_img from "../../assets/WhatsApp_Image_2024-09-16_at_16.38.23_437fb110-removebg-preview.jpg";
import profile_img from "../../assets/image.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Aman Shukla, a passionate frontend developer from
              Kanpur, India. Currently pursuing a B.Tech in{" "}
              <span>Computer Science and Engineering</span>, I specialize in
              building interactive and user-friendly web applications using
              ReactJS, NodeJS, and JavaScript. I thrive on solving complex
              problems and continuously expanding my skills in full-stack
              development.
            </p>

            <p>
              Alongside development, I’m an avid competitive programmer with
              700+ problems solved on LeetCode and a 3-star rating on CodeChef.
              I enjoy tackling complex coding challenges and constantly
              improving my problem-solving abilities.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p>React JS</p>
              <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p>SQL</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p>C++</p>
              <hr style={{ width: "90%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
