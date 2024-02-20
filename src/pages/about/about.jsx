import React from 'react'
import "./about.scss"
import { Experience, Skill } from '../../component';


export const About = () => {

  const experienceData = [
    {
      date: 'June 2021 - Present',
      role: 'Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Responsible for developing user-facing features and implementing responsive designs using HTML, CSS, and JavaScript. Collaborated with backend developers to integrate frontend interfaces with RESTful APIs.'
    },
    {
      date: 'January 2020 - May 2021',
      role: 'UI/UX Designer',
      company: 'Creative Designs Studio',
      description: 'Designed intuitive and user-friendly interfaces for web applications, focusing on creating wireframes, prototypes, and visual designs. Conducted user research and usability testing to gather feedback for iterative design improvements.'
    }
  ];

  const educationData = [
    {
      date: 'September 2016 - May 2020',
      role: 'Bachelor of Science in Computer Science',
      company: 'State University of Technology',
      description: 'Specialized in software engineering and gained hands-on experience in programming languages, algorithms, data structures, and software development methodologies.'
    },
    {
      date: 'September 2012 - June 2016',
      role: 'High School Diploma',
      company: 'City High School',
      description: 'Achieved academic excellence while participating in extracurricular activities such as coding competitions and science fairs.'
    }
  ];


  return (
    <div className='about-container'>
      <div className="about__header">
        <div className="about__personal-info">
          <div className="about__name-role">
            <div className="about__name">Patryk Ilnicki</div>
            <div className="about__role">Product Designer</div>
          </div>
          <div className="about__description">
            <div>
              I’m Patryk, a product designer and design system specialist from Poland with over 9 years of experience focusing on user experience and design systems to creating a user-centered design in SaaS products.
            </div>

            <div>
              Co-creator at Tetrisly one of the most popular starter kits for design systems. I had the opportunity to work with Phenom.com, Bidroom.com or Perfops.net but also with many startups from around the world as a Lead Designer.
            </div>
          </div>
        </div>
        <div className="about__profile-content" >
          <img src="https://framerusercontent.com/images/ASxqK23yrLOajDbgpUTdc9221SI.png" className="about__profile-img" alt="sagar-profile-img" />
        </div>
      </div>
      <Skill />
      <Experience data={experienceData} head={"Experience"} />
      <div className="divider-education-experience"></div>
      <Experience data={educationData} head={"Education"} />
    </div>
  );

};
