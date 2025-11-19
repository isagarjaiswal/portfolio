import React from 'react';
import {
  Css,
  Express,
  Git,
  Github,
  GithubAction,
  Html,
  Js,
  MongoDB,
  Netlify,
  Node,
  PostMan,
  ReactIcon,
  ReduxIcon,
  Storage,
  Ts,
} from '../../icons';

const skillIcons = {
  JavaScript: <Js />,
  TypeScript: <Ts />,
  HTML5: <Html />,
  CSS3: <Css />,

  'React.js': <ReactIcon />,
  'Next.js': <ReactIcon />,
  'Redux Toolkit': <ReduxIcon />,
  'Context API': <ReactIcon />,
  MUI: <Css />,
  'Tailwind CSS': <Css />,
  'WordPress (Elementor, WooCommerce)': <Html />,

  'Node.js': <Node />,
  NestJS: <Node />,
  'Express.js': <Express />,

  PostgreSQL: <Storage />,
  MongoDB: <MongoDB />,
  Redis: <Storage />,
  LocalStorage: <Storage />,
  SessionStorage: <Storage />,
  Cookies: <Storage />,
  'GCP Storage Buckets': <Storage />,

  'REST APIs': <PostMan />,
  GraphQL: <PostMan />,
  'OAuth 2.0': <Git />,
  RBAC: <Git />,
  SFTP: <Storage />,
  'Chrome Extension Development': <Js />,

  Git: <Git />,
  GitHub: <Github />,
  Postman: <PostMan />,
  Netlify: <Netlify />,
  Vercel: <Netlify />,
  Render: <Netlify />,
  'Google Cloud Platform': <Storage />,

  'GitHub Actions': <GithubAction />,
};

export const SkillIcon = ({ iconName }) => {
  const iconComponent = skillIcons[iconName];
  return iconComponent || <Js />;
};
