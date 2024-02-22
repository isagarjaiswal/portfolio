import React from 'react';
import "./blog.scss";
import { BlogCard } from '../../component/index';
import { blogsData } from '../../data';



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
