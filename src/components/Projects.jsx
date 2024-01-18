import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/work.css';

// const Projects = () => {

//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         // Fetch project data from JSON file
//         fetchProjects();
//     }, []);

//     const fetchProjects = async () => {
//         try {
//             const response = await fetch('/projectsData.json'); // Use an absolute path
//             const data = await response.json();
//             setProjects(data);
//         } catch (error) {
//             console.error('Error fetching project data:', error);
//         }
//     };

//     return (
//         <section className="projects">
//         <h2>My Projects</h2>
//         <div className="projects-list">
//             {projects.map(project => (
//             <div key={project.id} className="project-item">
//                 <img src={project.image} alt={project.title} />
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//             </div>
//             ))}
//         </div>
//         </section>
//     );
// }

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from JSON file
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/projectsData.json'); // Use an absolute path
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };

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
