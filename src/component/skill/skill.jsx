import React, { useEffect, useState } from 'react'
import { Chip } from '../index';
import "./skill.scss"

const skillsData = {
    Language: [`JavaScript`, `TypeScript`, `HTML`, `CSS`],
    Frontend: [`React`, `Redux`, `Context`],
    Backend: [`NodeJs`, `ExpresJs`, `Postman`],
    Database: [`MongoDB`, `Local Storage`, `Session Storage`, `Cookies`],
    "Version Control": [`Git`, "Github"],
    "CI/CD": [`Github Action`, `Netlify`]
}

const SkillCard = ({ skillsData }) => {
    return (
        <div className='skills'>
            {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className='skills__category'>
                    <div className='skill-sub-heading'>{category}</div>
                    <div className='skill-container'>
                        {skills.map((skill, index) => (
                            <Chip key={index} heading={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
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




