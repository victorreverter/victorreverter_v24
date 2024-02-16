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
          <h4 className='description-about'>Currently working as Web Design Manager at Telecoming, and when I am not designing I am running Half Marathons, reading, playing chess and more.</h4>

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

      <div className='top-container'>

        {/* <div className="paragraph-container">
          <p className='paragraph'>I grew up in Havana, Cuba, where life is full of colorful vibes and lively rhythms. Then I moved to Spain when I was quite young. I went to a Design School there, and it was in Web Design that I found my true passion – the cool mix of design, art, and the technical side of things.</p>
          <p className='paragraph'>From the bustling streets of Havana to the modern scenes of Spain, my experiences have made my view of the world pretty diverse. It's kind of like how Brasília, the modern capital of Brazil, has a mix of influences.</p>
          <p className='paragraph'>I got into design because, like in the example, I was drawn to it at a young age. Think of it like when they talk about the beige computer sparking an interest in technology. Even though I graduated with top marks in Design, my real excitement comes from the way great design, especially like what you see in Apple products, can totally change how we feel.</p>
          <p className='paragraph'>As I thought about the impact of awesome designs, I wondered if I could make something that leaves a mark on people too.</p>
          <p className='paragraph'>Nowadays, using my design skills from different areas, I'm on a mission to make things that go beyond just being useful. I want my designs to make people feel something special, turning everyday moments into something inspiring.</p>
          <p className='paragraph'></p>
        </div> */}
        
        <div className="skills-container">
        </div>
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

      <h5>Soft Skills</h5>

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
        <li>Framer</li>
        <li>Adobe CC</li>
        <li>HTML · CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>SCSS</li>
        <li>Jira</li>
        <li>Notion</li>
      </ul>

      <h5>Other passions</h5>

      <ul>
        <li>Run 1/2 Marathons</li>
        <li>Read non-fiction books</li>
        <li>Draw & Paint</li>
        <li>Play Chess</li>
        <li>Learn Languages</li>
      </ul>

      {/* <h5>My Resume</h5> */}

      {/* <a className='cv-link' href="" target="_blank" rel="noopener noreferrer">
        <p>See my CV</p>
      </a> */}

      {/* <Link to={"#"} className='cv-link-btn' href="" target="_blank">
        <div className="container-text">
          <span>See my CV</span>
        </div>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </Link> */}

      {/* <Footer /> */}
    </div>
  );
}

export default About;
