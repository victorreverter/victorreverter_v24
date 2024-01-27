// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/selected-projects.css';

const SelectedProjects = ({ projects }) => {
  return (
    <section className="selected-projects">
      <div className='container-projects'></div>
      <h3 className='projects-title'>Here are some selected projects that showcase skils and knowledge applied in solutions to problems</h3>
      <Link to={"/work"} className='btn-view-allpro'>
        <p>View All</p>
        <p>Projects</p>
      </Link>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="selected-project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <Link to={`/project_${project.id}`}>View Project</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
