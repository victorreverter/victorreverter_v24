import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';
import '../styles/footer.css';

import FooterLogo from '../assets/Big_VR_Logo_Light.png'

const Footer = () => {
  return (
    <footer className='footer-box'>
      <div id="footer-container">
        <div className='descriptive-container'>
          <img className="footer-pic" src={FooterLogo} alt="logo_header" />
          <h4 className='explicative-text'>Product, Brand and Frontend Designer with the rational intention of design or redesign the problems of today for a better tomorrow using my passion and evolving skills.</h4>
        </div>
        <div className="menu-footer-links">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <a href="">Blog</a>
        </div>
        <div className="menu-footer-links">
            <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
            <a href="">X (Twitter)</a>
            <a href="https://www.instagram.com/victorreverter/">Instagram</a>
            <a href="https://www.behance.net/VictorReverter">Behance</a>
        </div>
        <p className='copyright'>&copy; 2024 Victor Reverter. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;