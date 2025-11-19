import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.scss';
import {
  LocationIcon,
  LinkdlnIconHome,
  ResumeDone,
  ResumeDownload,
} from '../../icons/index';

import Blog from '../blog/blog';
import Project from '../project/project';

import { LinkItem } from '../../component/index';
import { gtagEvent } from '../../lib';

const Homepage = () => {
  const navigate = useNavigate();
  const [isDownload, setIsDownload] = useState(false);

  const toggleDownload = () => {
    setIsDownload(true);

    gtagEvent({
      action: 'resume_download_click',
      category: 'engagement',
      label: 'Resume Button',
    });

    setTimeout(() => {
      setIsDownload(false);
    }, 2000);
  };

  const handleAboutClick = () => {
    gtagEvent({
      action: 'about_button_click',
      category: 'navigation',
      label: 'About Page CTA',
    });

    navigate('/about');
  };

  const handleLinkedInClick = () => {
    gtagEvent({
      action: 'linkedin_click',
      category: 'social',
      label: 'LinkedIn Profile',
    });
  };

  const RESUME_LINK =
    'https://docs.google.com/document/d/1oheqyoGMY9uM5vHnI6LfcBPFxLk72CspkIito1SEZU8/edit?usp=sharing';

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
              <div onClick={handleLinkedInClick}>
                <LinkItem
                  link="https://www.linkedin.com/in/sagar-jaiswal"
                  icon={<LinkdlnIconHome />}
                />
              </div>
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
          <button className="footer-btn-about" onClick={handleAboutClick}>
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

export default Homepage;
