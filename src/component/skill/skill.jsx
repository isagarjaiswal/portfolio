import React from 'react'
import { SkillCard } from '../index';
import "./skill.scss"
import { skillsData } from '../../data';


export const Skill = () => {
    const data = skillsData;
    return (
        <div className='tools'>
            <div className="tools__heading">Skills</div>
            <div className="tools__description">
                <SkillCard skillsData={data} /></div>
        </div>
    );
}




