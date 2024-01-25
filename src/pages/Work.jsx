import React from 'react';
// import Header from '../components/Header';
import Projects from '../components/Projects';
// import Footer from '../components/Footer;
import '../App.css';
import GlobalData from '../projectsData.json';

const Work = () => {
  return (
    <div className="work">
      {/* <Header /> */}
      <Projects projects={GlobalData} />
      {/* <Footer /> */}
    </div>
  );
}

export default Work;