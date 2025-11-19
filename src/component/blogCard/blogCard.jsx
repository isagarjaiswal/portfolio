import React from 'react';
import './blogCard.scss';
import { gtagEvent } from '../../lib/analytics';
export const BlogCard = ({ blogData }) => {
  const { date, heading, description, mediumLink } = blogData;
  const toggleDetails = () => {
    gtagEvent({
      action: 'blog_read_click',
      category: 'blog',
      label: heading || mediumLink || 'unknown_blog',
    });

    if (mediumLink) {
      window.open(mediumLink, '_blank');
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-card">
        <div className="blog-date">{date}</div>
        <div className="blog-heading">{heading}</div>
        <div className="blog-description">{description}</div>
        {mediumLink && (
          <span className="blog-btn" onClick={toggleDetails}>
            Read More
          </span>
        )}
      </div>
      <div className="blog-img-container">
        <div className="blog-img"></div>
      </div>
    </div>
  );
};
