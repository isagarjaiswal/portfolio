import React, { useState } from 'react'
import "./socialMediaLinks.scss"
import { TwitterIcon, LikedlnIcon, LeetcodeIcon } from "../../icons/index";


const LinkItem = ({ link, icon, className }) => {
    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
        setPressed(true);
        setTimeout(() => {
            setPressed(false);
        }, 100);
        if (link) {
            window.open(link, "_blank");
        }
    }
    return (<>
        <div onClick={handleClick} className={`side-social-item ${pressed ? 'pressed' : ''}`} rel="noopener noreferrer">
            <div className={`side-social-item-${className}`}>
                {icon}
            </div>
        </div>
    </>)
}
export const SocialMediaLinks = () => {

    return (
        <div className='side-social-item-container'>

            <LinkItem link="https://twitter.com/iSagarjaiswal" icon={<TwitterIcon />} className="twitter" />
            <LinkItem link="https://www.linkedin.com/in/sagar-jaiswal-%F0%9F%87%AE%F0%9F%87%B3-b35bb321b/" icon={<LikedlnIcon />} className="linkedln" />
            <LinkItem link="https://leetcode.com/isagarjaiswal/" icon={<LeetcodeIcon />} className="leetcode" />
        </div >
    )
}