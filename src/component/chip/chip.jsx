import React from 'react'
import ChatGptIcon from '../../icons/chatGptIcon';
import "./chip.scss"

export const Chip = ({ img, heading }) => {
    return (
        <div className='chip'>
            <div className="chatGptIcon">
                <ChatGptIcon />
            </div>
            {heading && <div className='chip__heading'>{heading}</div>}
        </div>
    );
}

