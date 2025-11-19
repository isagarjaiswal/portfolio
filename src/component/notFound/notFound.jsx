import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';
export const NotFound = () => (
  <div className="not-found-card">
    <div className="not-found-icon">
      <i className="fas fa-exclamation-circle"></i>
    </div>
    <div className="not-found-text">
      <h2>404</h2>
      <Link to="/">Go Home</Link>
      <p>Oops! The page you're looking for cannot be found.</p>
    </div>
  </div>
);
