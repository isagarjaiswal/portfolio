import React from 'react';
import './chip.scss';
import { SkillIcon } from '../index';

export const Chip = ({ heading }) => {
  return (
    <div className="chip">
      <div className="chatGptIcon">
        <SkillIcon iconName={heading} />
      </div>
      {heading && <div className="chip__heading">{heading}</div>}
    </div>
  );
};
