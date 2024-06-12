import React from 'react';
// import Header from '../components/Header';
import LabProjects from '../components/LabProjects';
// import Footer from '../components/Footer;
import '../App.css';
import LabProjectData from '../labProjectsData.json';

const Lab = () => {
  return (
    <div className="lab">
      {/* <Header /> */}
      <LabProjects projects={LabProjectData} />
      {/* <Footer /> */}
    </div>
  );
}

export default Lab;