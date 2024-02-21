import React from 'react'
import "./personalDetails.scss"
import { useNavigate } from 'react-router-dom';
import myPhoto from "../../images/myProfile.png"


export const PersonalDetails = () => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate("/")


    return (
        <div className={`side-profile-container`}>
            <div className="side-img-container" onClick={handleNavigate}>
                <img className='myimg' src={myPhoto} alt="Admin" />
            </div>
            <div className="role-name-container">
                <div className="name-container">Sagar Jaiswal</div>
                <div className="role-container">MERN Developer</div>
            </div>
        </div>
    )
}