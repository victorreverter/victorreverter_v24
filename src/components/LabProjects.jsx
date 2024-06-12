// import React, { useEffect, useState } from 'react';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/lab-projects.css';

const coverLabProjects = require.context('../assets/lab_projects', true)

const LabProjects = ({ projects }) => {
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
                        <Link to={project.url} target="_blank">
                            <div className='contain-title'>
                                <h3 className='item-title'>{project.title}</h3>
                                {/* <h5 className='item-date'>{project.date}</h5> */}
                            </div>
                            <p className='item-description'>{project.description}</p>
                            <img 
                                // src={project.image} 
                                src={ coverLabProjects(`./${project.image}.avif`) }
                                alt={project.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LabProjects;
