import React from 'react'

const CopyIcon = ({ dimension = "24px" }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={dimension}
            height={dimension}
            viewBox="0 -960 960 960"
            fill="#737373"

        >
            <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360zm0-80h360v-480H360v480zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200zm160-240v-480 480z"></path>
        </svg>
    );
}



export default CopyIcon