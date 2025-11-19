import React, { Suspense, useEffect, useState } from 'react';
import './portfolio.scss';
import { Routes, Route } from 'react-router-dom';
import { SideBar, Navbar, Footer, Loader } from '../../component';
import { gtagEvent } from '../../lib';

const Homepage = React.lazy(() => import('../homepage/homepage'));
const About = React.lazy(() => import('../about/about'));
const Blog = React.lazy(() => import('../blog/blog'));
const Project = React.lazy(() => import('../project/project'));
const Contact = React.lazy(() => import('../contact/contact'));
const NotFound = React.lazy(() => import('../../component/notFound/notFound'));

const Portfolio = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    gtagEvent({
      action: 'portfolio_view',
      category: 'page_load',
      label: 'Portfolio Root',
    });

    const handleResize = () => setIsMobileView(window.innerWidth <= 875);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="portfolio-container"
      role="application"
      aria-label="Portfolio"
    >
      <div className="nav-bar-box">
        {isMobileView ? <Navbar /> : <SideBar />}
      </div>

      <div className="main-content-box">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
