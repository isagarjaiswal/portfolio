import React, { useEffect } from 'react';
import './blog.scss';
import { BlogCard } from '../../component/index';
import { blogsData } from '../../data';
import { gtagEvent } from '../../lib';

const Blog = () => {
  const data = blogsData;
  useEffect(() => {
    gtagEvent({
      action: 'blog_page_view',
      category: 'page_view',
      label: 'Blog Page',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="blogs-container">
      <div className="blogs-heading">Blog</div>
      <div className="blogs-description">
        Insights, thoughts and trends in design
      </div>
      <div className="blogs">
        {data.map((blog, i) => (
          <BlogCard key={i} blogData={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
