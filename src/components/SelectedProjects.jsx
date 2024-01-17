// Projects.js
import React from 'react';
// import './Projects.css';
import { Route, Routes, useLocation, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import '../styles/global.css';

import Project from '../pages/Project';

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <h2>Top Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>

            <a href={`/projects/${project.link}`} target="_blank" rel="noopener noreferrer">View Real</a>
          
            {/* <Routes>
              <Route path={`/projects/${project.link}`} element={<Project/>}></Route>
            </Routes> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
