// Projects.js
import React from 'react';
// import './Projects.css';
// import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

import Project from '../pages/Project';

const SelectedProjects = ({ projects }) => {
  return (
    <section className="projects">
      <h2>Top Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <Link to={`/projects/project_${project.id}`}>View Project</Link>
            <Link to={`/projects/project_${project.id}`} target="_blank" rel="noopener noreferrer">View Real</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// const SelectedProjects = ({ projects }) => {
//   return (
//     <section className="projects">
//       <h2>Top Projects</h2>
//       <div className="projects-list">
//         {projects.map(project => (
//           <div key={project.id} className="project-item">
//             <img src={project.image} alt={project.title} />
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>

//             <Link to={`/projects/project_${project.id}/project_${project.id}`}>View Project</Link>
//             <Link to={`/projects/project_${project.id}/project_${project.id}`} target="_blank" rel="noopener noreferrer">View Real</Link>
//             {/* <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>

//             <a href={`/projects/${project.link}`} target="_blank" rel="noopener noreferrer">View Real</a> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default SelectedProjects;
