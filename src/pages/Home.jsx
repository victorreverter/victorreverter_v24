// Home.js
import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import HomeContent from '../components/Home/Home';
// import Footer from '../components/Footer';

import HeroHome from '../components/HeroHome';
import SelectedProjects from '../components/SelectedProjects';

// import '../styles/App.css';
import '../styles/global.css'

const Home = () => {

    const [selectedProjects, setSelectedProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from JSON file
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
        const response = await fetch('/projectsData.json'); // Use an absolute path
        const data = await response.json();
        // Set only the first three projects
        setSelectedProjects(data.slice(0, 3));
        } catch (error) {
        console.error('Error fetching project data:', error);
        }
    };

    return (
        <div className="app">
            {/* <Header /> */}
            {/* <h3>Dedal</h3> */}
            <HeroHome />
            <SelectedProjects projects={selectedProjects} />
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
