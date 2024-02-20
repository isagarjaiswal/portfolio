import React from 'react'

export const ResumeDone = ({ dimension = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={dimension}
            height={dimension}
            viewBox="0 -960 960 960"
            fill='currentColor'
        >
            <path d="M382-320L155-547l57-57 170 170 366-366 57 57-423 423zM200-160v-80h560v80H200z"></path>
        </svg>
    );
}