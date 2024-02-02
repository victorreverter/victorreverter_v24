import React from 'react';
import '../styles/global.css';
import '../styles/about.css';

import aboutImage from '../assets/About_Pic.jpg';

const About = () => {
  return (
    <div className="about">
      {/* <Header /> */}
      <h3 className='title'>Victor Reverter, Designer & Product Creator</h3>
      
      <div className='top-container'>

        <div className="subtitle-container">
          <h4 className='subtitle'>I am Victor Reverter, a designer and product creator. With a long experience in the creation of graphic, web, and identity products. With each project, I push my work to new horizons, focused on creating functional and user-centered digital products with visually stunning designs.</h4>
          <h4 className='subtitle'>At this moment in my life, I keep myself looking for improvement and a sense of completion through  endeavors and challenges.</h4>
          <h4 className='subtitle'>Always doing more...</h4>
        </div>

        <img className='about-pic' src={aboutImage} alt={"about-pic"} />
      </div>
      

      <h5>Skills</h5>

      <ul>
        <li>Graphic Design</li>
        <li>Branding Design</li>
        <li>UX/UI</li>
        <li>Web Design</li>
        <li>Design Management</li>
        <li>Team Work</li>
        <li>Storytelling</li>
        <li>Digital Production</li>
        <li>Frontend Development</li>
      </ul>

      <h5>Softskills</h5>

      <ul>
        <li>Communication</li>
        <li>Empathy</li>
        <li>Adaptability</li>
        <li>Problem Solving</li>
        <li>Time Management</li>
        <li>Decision Making</li>
        <li>Collaboration & Teamwork</li>
      </ul>

      <h5>Tools</h5>

      <ul>
        <li>Figma</li>
        <li>Jira</li>
        <li>Adobe CC</li>
        <li>HTML · CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Time Management</li>
        <li>Decision Making</li>
        <li>Collaboration & Teamwork</li>
      </ul>

      <h5>Other passions</h5>

      <ul>
        <li>Running 1/2 Marathons</li>
        <li>Read non-fiction books</li>
        <li>Drawing & Painting</li>
        <li>Play Chess</li>
        <li>Learn Languages</li>
      </ul>

      <h5>My Resume</h5>

      <a className='cv-link' href="" target="_blank" rel="noopener noreferrer">
        <p>See my CV</p>
      </a>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
