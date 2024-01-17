// export const importProject = projectNumber => {
//   return import(`../projects/project_${projectNumber}/project_${projectNumber}`).then(module => module.default);
// };

// const projectContext = require.context('../projects', true, /project_\d\/project_\d\.jsx$/);

// export const importProject = projectNumber => {
//   const normalizedProjectNumber = `project_${projectNumber}`;
//   return projectContext(`./${normalizedProjectNumber}/${normalizedProjectNumber}.jsx`).then(module => module.default);
// };

export const importProject = projectNumber => {
  const normalizedProjectNumber = `project_${projectNumber}`;
  return import(`./projects/${normalizedProjectNumber}/${normalizedProjectNumber}`).then(module => module.default);
};

// import React from 'react';

// export const importProject = projectNumber => {
//   const normalizedProjectNumber = `project_${projectNumber}`;
//   const componentPromise = import(`./projects/${normalizedProjectNumber}/${normalizedProjectNumber}`);
//   return React.lazy(() => componentPromise.then(module => ({ default: module.default })));
// };


