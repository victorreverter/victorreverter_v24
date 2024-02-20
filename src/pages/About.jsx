import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/about.css';

import aboutImage from '../assets/About_Pic.jpg';

const About = () => {
  return (
    <div className="about">
      {/* <Header /> */}
      <h3 className='title'>About me</h3>
      
      <div className='top-container'>

        <div className="subtitle-container">
          <h4 className='description-about'>Full stack designer with 9 years of experience focused in the creation of graphic, web, and identity products with that mojo of make things as better as possible and good to be used.</h4>
          <h4 className='description-about'>Because of my life and experiences working on creative process I think that some key points in everything we do are the passion, keep sharpening skills and always set upper goals.</h4>

          {/* <h4 className='description-about'>Currently working as Web Design Manager at Telecoming, and when I am not designing I am running Half Marathons, reading, playing chess and more.</h4> */}

          <Link to={"#"} className='cv-link-btn' href="" target="_blank">
            <div className="container-text">
              <span>My Resume</span>
            </div>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
        
        <img className='about-pic' src={aboutImage} alt={"about-pic"} />
      </div>

      <div className="block-container">
        <h4>Experience</h4>

        <ul className='experience-container'>
          <h5><span>Graphic and Web Designer at Premdan</span> - April 2015 to September 2015</h5>
          <p>The sector of the company was the translation. I had here my first professional job as college internship. Where I made different graphic and web design projects which helped to the company with theirs business.</p>

          <h5><span>Creative Designer at Telecoming</span> - October 2015 to March 2016</h5>
          <p>My work in my second internship was primarily doing graphic design projects, but at the end I finished doing web design projects as well.</p>

          <h5><span>Web Designer at Telecoming</span> - April 2016 to June 2019</h5>
          <p>After my internship I remained in the same company, but then I did both graphic and web design projects and now some projects that included User Interfaces (UI).</p>
          
          <h5><span>Senior Web Designer at Telecoming</span> - July 2019 to December 2021</h5>
          <p>After more than three years the company considering my experience has given me the new role as Senior. I was a support for new workmates or members of the company who require my experience and knowledge. I keep doing both kind of Projects graphic, web design and some UI.</p>
        </ul>

        <ul className='experience-container'>

          <h5><span>Team Leader Web Designer at Telecoming</span> - January 2022 to August 2022</h5>
          <p>After 2 years and a half the company considering my experience has given me the new role as Team Leader in the Web Design (but also Creative Design) field. Apart of my seniority duties now I have more duties related specially with the management of knowledge to help teammates, but more required as a link or a reference with the technical teams.</p>

          <h5><span>Manager Web Designer at Telecoming</span> - September 2022 to Present</h5>
          <p>After a half of a year the company considering my experience and skills has given me the new role as Manager in the Web Design (but also Creative Design) field. Apart of my previous duties now I have more duties related specially with the management of the team...</p>
          
        </ul>
      </div>

      <div className="block-container">
        <h4>Education</h4>

        <ul className='experience-container'>
          <h5><span>Design Degree at University Complutense de Madrid (UCM)</span> - September 2011 to June 2015</h5>
          <p>Four years learning the base of design in many professional fields like 3D Sculpture, Animation, Scenography, Graphic Design, Web Design, Photography, etc.</p>

          <h5><span>Full Stack Web Development Certification at Free Code Camp</span> July 2015 to January 2017</h5>
          <p>I learnt more with this course about programming and web development of Frontend products.</p>
        </ul>

        <ul className='experience-container'>
          <h5><span>LinkedIn Certifications</span> - December 2018 to December 2019</h5>
          <p>For a year I got a LikedIn Premium Subscription for keep updated and learn new skills. So then there I learned new skills like React programming, ES6, UX & UI, Javascript, etc. I have some of the courses certificates that I have taken published right directly on my LinkedIn profile where everyone can see it.</p>

          <h5><span>Multiple Sources</span> - May 2020 to Present</h5>
          <p>As I like to keep updated in the last months I have been learning new skills on multiple platforms like Pluralsight & Platzi, among others. With the main goal of never stop learning and trying to be better.</p>
        </ul>
        
      </div>

      <div className="block-container">
        <h4>Skills</h4>

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
      </div>

      <div className="block-container">
        <h4>Soft Skills</h4>

        <ul>
          <li>Communication</li>
          <li>Empathy</li>
          <li>Adaptability</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Decision Making</li>
          <li>Collaboration & Teamwork</li>
        </ul>
      </div>

      <div className="block-container">
        <h4>Tools</h4>

        <ul>
          <li>Figma</li>
          <li>Framer</li>
          <li>Adobe CC</li>
          <li>HTML · CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>SCSS</li>
          <li>Jira</li>
          <li>Notion</li>
        </ul>
      </div>

      <div className="block-container">
        <h4>Other passions</h4>

        <ul>
          <li>Run 1/2 Marathons</li>
          <li>Read non-fiction books</li>
          <li>Draw & Paint</li>
          <li>Play Chess</li>
          <li>Learn Languages</li>
        </ul>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default About;
