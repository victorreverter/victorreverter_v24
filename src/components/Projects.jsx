// import React, { useEffect, useState } from 'react';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/work.css';

const coverProjects = require.context('../assets/project_covers', true)

const Projects = ({ projects }) => {
    useEffect(() => {
        const ProjectsContainer = document.querySelector('#ProjectsContainer');
    
        setTimeout(() => {
            ProjectsContainer.classList.add('projects-activated');
        }, 500);

    }, []);

    return (
        <section id="ProjectsContainer" className="projects">
            {/* <h2 className='title'>Projects</h2>
            <h4 className='subtitle'>Check out projects where I have had the pleasure of working on</h4> */}
            
            <div className="projects-list">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <Link to={`/project_${project.id}`}>
                            <div className='contain-title'>
                                <h3 className='item-title'>{project.title}</h3>
                                <h5 className='item-date'>{project.date}</h5>
                            </div>
                            <p className='item-description'>{project.description}</p>
                            <h5 className='item-categories'>{project.categories}</h5>
                            <img 
                                // src={project.image} 
                                src={ coverProjects(`./${project.image}.jpg`) }
                                alt={project.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
