
import React from 'react';
import { Css, Express, Git, Github, GithubAction, Html, Js, MongoDB, Netlify, Node, PostMan, ReactIcon, ReduxIcon, Storage, Ts } from '../../icons';

const skillIcons = {
    JavaScript: <Js />,
    TypeScript: <Ts />,
    HTML: <Html />,
    CSS: <Css />,
    React: <ReactIcon />,
    Redux: <ReduxIcon />,
    NodeJs: <Node />,
    ExpressJs: <Express />,
    Postman: <PostMan />,
    MongoDB: <MongoDB />,
    "Local Storage": <Storage />,
    "Session Storage": <Storage />,
    "Cookies": <Storage />,
    "Github": <Github />,
    "Git": <Git />,
    "Github Action": <GithubAction />,
    "Netlify": <Netlify />,
};

export const SkillIcon = ({ iconName }) => {

    const iconComponent = skillIcons[iconName];
    return iconComponent || <Js />;
};
