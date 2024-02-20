import React from 'react';
import "./blog.scss";
import { BlogCard } from '../../component/index';

const blogsData = [
  {
    date: "Aug 2023",
    heading: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mediumLink: "https://medium.com",
    img: "https://via.placeholder.com/150"
  },
  {
    date: "Sep 2023",
    heading: "Dolor Sit Amet",
    description: "Dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mediumLink: "https://medium.com",
    img: "https://via.placeholder.com/150"
  },
  {
    date: "Oct 2023",
    heading: "Consectetur Adipiscing",
    description: "Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mediumLink: "https://medium.com",
    img: "https://via.placeholder.com/150"
  },
]

export const Blog = () => {
  const data = blogsData;
  return (
    <div className='blogs-container'>
      <div className="blogs-heading">Blog</div>
      <div className="blogs-description">Insights, thoughts and trends in design</div>
      <div className="blogs">
        {data.map((blog, i) => <BlogCard key={i} blogData={blog} />)}
      </div>
    </div>
  )
}
