// Projects.js
import React from 'react';
// import './Projects.css';
import '../styles/global.css';

const Projects = () => {
  // Replace with your actual project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1.',
      image: 'project1.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2.',
      image: 'project2.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3.',
      image: 'project3.jpg',
      link: '#',
    },
  ];

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
