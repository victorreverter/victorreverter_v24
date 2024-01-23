// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/work.css';

const Projects = ({ projects }) => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link to={`/project_${project.id}`}>View Project</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
