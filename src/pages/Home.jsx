// import React, { useEffect, useState } from 'react';
import React from 'react';
// import Header from '../components/Header';
// import HomeContent from '../components/Home/Home';
// import Footer from '../components/Footer';

import HeroHome from '../components/HeroHome';
import SelectedProjects from '../components/SelectedProjects';

// import '../styles/App.css';
import '../styles/global.css'
import GlobalData from '../projectsData.json'

const Home = () => {

    // const selectedProjects = [
    //     {
    //         "id": 1,
    //         "title": "Project 1",
    //         "description": "Description of Project 1.",
    //         "image": "project1.jpg",
    //         "path": "#"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Project 2",
    //         "description": "Description of Project 2.",
    //         "image": "project2.jpg",
    //         "path": "#"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Project 3",
    //         "description": "Description of Project 3.",
    //         "image": "project3.jpg",
    //         "path": "#"
    //     },
    //     {
    //         "id": 4,
    //         "title": "Project 4",
    //         "description": "Description of Project 4.",
    //         "image": "project4.jpg",
    //         "path": "#"
    //     }
    // ]

    return (
        <div className="home">
            {/* <Header /> */}
            {/* <h3>Dedal</h3> */}
            <HeroHome />
            <SelectedProjects projects={GlobalData.slice(0,3)} />
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
