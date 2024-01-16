// Home.js
import React from 'react';
import Header from '../components/Header';
// import HomeContent from '../components/Home/Home';
import Footer from '../components/Footer';

import HeroHome from '../components/HeroHome';
import SelectedProjects from '../components/SelectedProjects';

// import '../styles/App.css';
import '../styles/global.css'

const Home = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      {/* <h3>Dedal</h3> */}
      <HeroHome />
      <SelectedProjects />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
