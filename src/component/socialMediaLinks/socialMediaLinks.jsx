import React from 'react'
import "./socialMediaLinks.scss"
import { TwitterIcon, LikedlnIcon, LeetcodeIcon } from "../../icons/index";


const LinkItem = ({ link, icon, className }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    }
    return (<div onClick={handleClick} className={`side-social-item`} rel="noopener noreferrer">
        <div className={`side-social-item-${className}`}>
            {icon}
        </div>
    </div>)
}

export const SocialMediaLinks = () => {
    return (
        <div className='side-social-item-container'>

            <LinkItem link="https://twitter.com/iSagarjaiswal" icon={<TwitterIcon />} className="twitter" />

            <LinkItem link="https://www.linkedin.com/in/isagarjaiswal" icon={<LikedlnIcon />} className="linkedln" />

            <LinkItem link="https://leetcode.com/isagarjaiswal/" icon={<LeetcodeIcon />} className="leetcode" />

        </div >
    )
}