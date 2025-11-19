import React from 'react';
import './about.scss';
import { Experience, Skill } from '../../component';
import myPhoto from '../../images/myProfile.png';
import myPhotoPNG from '../../images/myProfilePNG.png';
import { educationData, experienceData } from '../../data/index';

export const About = () => {
  useEffect(() => {
    gtagEvent({
      action: 'about_page_view',
      category: 'page_view',
      label: 'About Page',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="about-container">
      <div className="about__header">
        <div className="about__personal-info">
          <div className="about__name-role">
            <div className="about__name">Sagar Jaiswal</div>
            <div className="about__role">Full-Stack Developer </div>
          </div>
          <div className="about__description">
            <div className="about__description-content">
              As a full-stack developer based in Bengaluru, India, I specialize
              in building secure, scalable, and user-friendly web applications.
              I focus on writing clean, reusable code with React, Next.js,
              Node.js, and NestJS, ensuring both performance and
              maintainability.
            </div>
            <div className="about__description-content">
              I have hands-on experience with REST and GraphQL APIs,
              authentication flows (OAuth 2.0, RBAC), and database optimization
              using PostgreSQL, MongoDB, and Redis. With a Bachelor's degree in
              Computer Science, I’m passionate about delivering impactful
              solutions and collaborating on projects that drive measurable
              results.
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
            alt="sagar-profile-img"
          />
        </div>
      </div>
      <Skill />
      <Experience data={experienceData} head={'Experience'} />
      <div className="divider-education-experience"></div>
      <Experience data={educationData} head={'Education'} />
    </div>
  );
};
