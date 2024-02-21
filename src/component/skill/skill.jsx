import React, { useEffect, useState } from 'react'
import { SkillCard } from '../index';
import "./skill.scss"

const skillsData = {
    Language: [`JavaScript`, `TypeScript`, `HTML`, `CSS`],
    Frontend: [`React`, `Redux`, `Context`],
    Backend: [`NodeJs`, `ExpresJs`, `Postman`],
    Database: [`MongoDB`, `Local Storage`, `Session Storage`, `Cookies`],
    "Version Control": [`Git`, "Github"],
    "CI/CD": [`Github Action`, `Netlify`]
}

export const Skill = () => {
    const [data, setData] = useState(skillsData)
    useEffect(() => {
        setData(skillsData)
    }, [])
    return (
        <div className='tools'>
            <div className="tools__heading">Skills</div>
            <div className="tools__description">
                <SkillCard skillsData={data} /></div>
        </div>
    );
}




