// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/global.css';
// import { useLocation, Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Work from './pages/Work';
import Lab from './pages/Lab';
import About from './pages/About';

import Footer from './components/Footer';

import Project0 from './projects/project_0/project_0';
import Project1 from './projects/project_1/project_1';
import Project2 from './projects/project_2/project_2';
import Project3 from './projects/project_3/project_3';
import Project4 from './projects/project_4/project_4';

// Where projects routes are placed
const projects = [
  {
    id: 0,
    title: "Project 0",
    path: "/project_0",
    component: Project0,
  },
  {
    id: 1,
    title: "Project 1",
    path: "/project_1",
    component: Project1,
  },
  {
    id: 2,
    title: "Project 2",
    path: "/project_2",
    component: Project2,
  },
  {
    id: 3,
    title: "Project 3",
    path: "/project_3",
    component: Project3,
  },
  {
    id: 4,
    title: "Project 4",
    path: "/project_4",
    component: Project4,
  },
  // Add more projects as needed
];

const App = () => {
  // const [count, setCount] = useState(0)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/project_1" element={<Project1 />} /> */}

        {projects.map((project) => (
          <Route
            key={project.id}
            path={project.path}
            element={<project.component />}
          />
        ))}

      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />

        {projects.map((project) => (
          <Route
            key={project.id}
            path={project.path}
            element={<project.component />}
          />
        ))}

      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;