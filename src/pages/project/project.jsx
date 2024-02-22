import React from 'react'
import "./project.scss"
import { ProjectCard } from '../../component/index';
import { projectsData } from '../../data/project';





export const Project = ({ head }) => {
  const data = projectsData
  return (
    <div className={`projects-container`}>
      <div className="projects-heading">{head || "Projects"}</div>
      {!head && <div className="projects-description">Showcase of innovative design solutions</div>}
      <div className="projects">
        {data?.map((data, i) => <ProjectCard key={i} data={data} />)}
      </div>
    </div>
  )
}
