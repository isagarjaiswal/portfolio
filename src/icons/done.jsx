import React from 'react';

const Done = ({ dimension = '24' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M382-240L154-468l57-57 171 171 367-367 57 57-424 424z"></path>
    </svg>
  );
};

export default Done;
