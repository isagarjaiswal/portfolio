import React, { createContext, useState } from "react";
import "./App.scss";
import { Routes, Route, NavLink } from 'react-router-dom';
import { About, Blog, Contact, Homepage, Project } from './pages';
import { Theme } from "./component/index";


export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`box ${theme ? '' : 'light'}`}>
        <div className="">
        </div>
        <div className="">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/project" activeClassName="active">Project</NavLink>
          <Theme />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/project' element={<Project />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>

  );
};

export default App;
