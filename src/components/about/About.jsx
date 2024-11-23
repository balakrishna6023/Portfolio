import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an enthusiastic and dedicated Full Stack Developer with a
              foundational understanding of Java development and full-stack
              technologies. I specialize in building dynamic and efficient web
              applications using modern frameworks and languages. Despite having
              less professional experience, my passion for coding drives me to
              continuously learn and adapt to new challenges.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MERN stack</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-ach">
        {/* <div className="about-achievement">
           <h1>10+</h1>
           <p>Years of experience</p>
        </div>
        <hr /> */}
        <div className="about-achievement">
          <h1>10+</h1>
          <p>projects completed</p>
        </div>
        {/* <hr />
        <div className="about-achievement">
           <h1>15+</h1>
           <p>happy clients</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
