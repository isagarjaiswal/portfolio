import React from "react";
import "./about.scss";
import { Experience, Skill } from "../../component";
import myPhoto from "../../images/myProfile.png"
import myPhotoPNG from "../../images/myProfilePNG.png"
import { educationData, experienceData } from "../../data/index";

export const About = () => {


  return (
    <div className="about-container">
      <div className="about__header">
        <div className="about__personal-info">
          <div className="about__name-role">
            <div className="about__name">Sagar Jaiswal</div>
            <div className="about__role">Mern Developer</div>
          </div>
          <div className="about__description">
            <div className="about__description-content">
              As a frontend developer based in Bhopal, India, I specialize in crafting clean, reusable code for enhanced readability and maintainability. With hands-on experience in technologies like React, JavaScript, CSS (SCSS), and Git, I am equipped to tackle complex challenges and deliver high-quality solutions.
            </div>
            <div className="about__description-content">
              I've honed my skills across the full stack of web development, working on REST APIs, authentication flows, and responsive designs. With a Bachelor's degree in Computer Science, I'm dedicated to driving impactful projects and exceeding expectations.
            </div>
          </div>
        </div>
        <div className="about__profile-content">
          <img
            src={myPhoto}
            className="about__profile-img"
            alt="sagar-profile-img"
          />
          <img
            className="about__profile-img"
            src={myPhotoPNG}
            alt="sagar-profile-img" />
        </div>
      </div>
      <Skill />
      <Experience data={experienceData} head={"Experience"} />
      <div className="divider-education-experience"></div>
      <Experience data={educationData} head={"Education"} />
    </div>
  );
};
