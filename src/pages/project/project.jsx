import React, { useEffect, useState } from 'react'
import "./project.scss"
import tictactoe from "../../images/tictactoi.png"
import reacttable from "../../images/reacttable.png"
import { ProjectCard } from '../../component/index';

const projectsData = [
  {
    title: "React Table",
    coCreator: "Solo Project",
    deployLink: "https://react-js-table.netlify.app/",
    img: reacttable,
  },
  {
    title: "Tic tac toe game",
    coCreator: "Solo Project",
    deployLink: "https://isagarjaiswal.github.io/tic-tak-toi/",
    img: tictactoe,
  },

];



export const Project = ({ head }) => {
  const [data, setData] = useState()
  useEffect(() => {
    setData(projectsData)
  }, [])

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
