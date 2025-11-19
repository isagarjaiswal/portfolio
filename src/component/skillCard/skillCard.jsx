import { Chip } from '..';
import './skillCard.scss';

export const SkillCard = ({ skillsData }) => {
  return (
    <div className="skills">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills__category">
          <div className="skill-sub-heading">{category}</div>
          <div className="skill-container">
            {skills.map((skill, index) => (
              <Chip key={index} heading={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
