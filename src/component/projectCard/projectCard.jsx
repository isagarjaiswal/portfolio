import React from 'react';
import "./projectCard.scss";

export const ProjectCard = ({ data }) => {
    const { title, deployLink, coCreator, img } = data;

    const toggleDetails = () => {
        if (deployLink) {
            window.open(deployLink, "_blank");
        }
    };
    return (
        <div className="project-card" onClick={toggleDetails}>
            <div className="project-img-container">
                <img className='project-img' src={`${img}`} alt={title} />
            </div>
            <div className="title">{title}</div>
            <div className="co-creator"> {coCreator}</div>
        </div>
    );
};


