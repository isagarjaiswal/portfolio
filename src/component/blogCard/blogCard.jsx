import React from 'react'
import "./blogCard.scss"
export const BlogCard = ({ blogData }) => {
    const { date, heading, description, mediumLink } = blogData
    const toggleDetails = () => {
        if (mediumLink) {
            window.open(mediumLink, "_blank");
        }
    };

    return (
        <div className='blog-container'>
            <div className="blog-card">
                <div className="blog-date">{date}</div>
                <div className="blog-heading">{heading}</div>
                <div className="blog-description">{description}</div>
                <span className="blog-btn" onClick={toggleDetails}>
                    Read More
                </span>
            </div>
            <div className="blog-img-container">
                <div className="blog-img"></div>
            </div>
        </div>
    )
}