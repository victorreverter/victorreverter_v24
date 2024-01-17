import React from 'react';
import { useParams } from 'react-router-dom';

const Project = ({params}) => {
  const { id } = useParams();

  // Aquí puedes utilizar el parámetro 'id' para cargar los detalles del proyecto según sea necesario.
  // Por ahora, simplemente mostramos el ID del proyecto.

  const nextProjectId = parseInt(id, 10) + 1;

  return (
    <div>
        <h2>Project Details - {id}</h2>
        {/* Agrega detalles específicos del proyecto aquí */}

        <a href={`/projects/project_${nextProjectId}`} target="_blank" rel="noopener noreferrer">
            Go to Next Project
        </a>

        <a href={`/projects/${id}`} target="_blank" rel="noopener noreferrer">
            Go to Next Project
        </a>
    </div>
  );
};

export default Project;