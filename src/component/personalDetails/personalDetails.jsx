import React from 'react'
import "./personalDetails.scss"
import { useNavigate } from 'react-router-dom';


export const PersonalDetails = () => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate("/")


    return (
        <div className={`side-profile-container`}>
            <div className="side-img-container" onClick={handleNavigate}>
                <img className='myimg' src="https://framerusercontent.com/images/ASxqK23yrLOajDbgpUTdc9221SI.png" alt="Admin" />
            </div>
            <div className="role-name-container">
                <div className="name-container">Patryk Ilnicki</div>
                <div className="role-container">Product Designer</div>
            </div>
        </div>
    )
}