import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.scss";
import {
  LocationIcon,
  LinkdlnIconHome,
  ResumeDone,
  ResumeDownload,
} from "../../icons/index";
import { Project, Blog } from "../index";
import { LinkItem } from "../../component/index";

export const Homepage = () => {
  const navigate = useNavigate();
  const [isDownload, setIsDownload] = useState(false);

  const toggleDownload = () => {
    setIsDownload(true);
    setTimeout(() => {
      setIsDownload(false);
    }, 2000);
  };
  const RESUME_LINK =
    "https://docs.google.com/document/d/1oheqyoGMY9uM5vHnI6LfcBPFxLk72CspkIito1SEZU8/edit?usp=sharing";

  return (
    <>
      <div className="container">
        <div className="available-for-work-container">
          <div className="dot-icon-container"></div>
          <div className="available-for-work">Available for work</div>
        </div>
        <div className="header">
          <div className="header-title">
            Hello! I'm Sagar
            <div className="clapping-icon">
              <LinkItem
                link="https://www.linkedin.com/in/sagar-jaiswal-%F0%9F%87%AE%F0%9F%87%B3-b35bb321b/"
                icon={<LinkdlnIconHome />}
              />
            </div>
          </div>
          <div className="header-description">
            Building Real-World Applications.
          </div>
        </div>

        <div className="header-location">
          <LocationIcon /> Bengaluru, India
        </div>

        <div className="content">
          Full-Stack Developer with expertise in creating clean, reusable code
          for improved user experiences.
        </div>
        <div className="footer">
          <button
            className="footer-btn-about"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button className="resume-btn" onClick={toggleDownload}>
            <a
              href={RESUME_LINK}
              rel="noreferrer noopener"
              target="_blank"
              download
            >
              Resume
              {isDownload ? (
                <ResumeDone dimension="20" />
              ) : (
                <div className="shake-animation">
                  <ResumeDownload dimension="20" />
                </div>
              )}
            </a>
          </button>
        </div>
        <div className="additional-footer">
          <Project head="Selected Work" />
          <Blog />
        </div>
      </div>
    </>
  );
};
