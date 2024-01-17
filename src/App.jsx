// import React from 'react';
import React, { Suspense } from 'react';
import './App.css';
import { useState, useEffect } from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { importProject } from './utils';

import Header from './components/Header';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Project from './pages/Project';

import Footer from './components/Footer';

const App = () => {
  const projectNumbers = [1, 2, 3];

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />

        {projectNumbers.map(projectNumber => (
          <Route
            key={projectNumber}
            path={`/projects/project_${projectNumber}`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {React.lazy(() => importProject(projectNumber))}
              </Suspense>
            }
          />
        ))}
      </Routes>

      <Footer />
    </div>
  );
};

// const App = () => {
//   // const [count, setCount] = useState(0)
//   // const location = useLocation()

//   // useEffect(() => {
//   //   window.scrollTo(0, 0)
//   // }, [location.pathname])

//   // Assuming you have an array of project numbers [1, 2, 3, ...]
//   const projectNumbers = [1, 2, 3]; // Update this array with your actual project numbers

//   return (
//     <div className="app">
//       <Header />

//       {/* <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/about" element={<About/>}></Route>
//           <Route path="/work" element={<Work/>}></Route>

//           {projectNumbers.map(projectNumber => (
//             <Route
//               key={projectNumber}
//               path={`/projects/project_${projectNumber}`}
//               element={React.lazy(() => importProject(projectNumber))}
//             />
//           ))}
//         </Routes>
//       </Router> */}

//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/work" element={<Work/>}></Route>
//         {/* <Route path="/projects/:id" element={<Project/>}></Route> */}

//         {projectNumbers.map(projectNumber => (
//           <Route
//             key={projectNumber}
//             path={`/projects/project_${projectNumber}`}
//             element={React.lazy(() => importProject(projectNumber))}
//           />
//         ))}
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// const App = () => {
//   // const [count, setCount] = useState(0)
//   const location = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [location.pathname])

//   return (
//     <div className="app">
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/work" element={<Work/>}></Route>
//         <Route path="/projects/:id" element={<Project/>}></Route>
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

export default App;