import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';
import '../styles/footer.css';

import FooterLogo from '../assets/FooterLogo.png'

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
          <Link to="" target='_blank'>Blog</Link>
        </div>
        <div className="menu-footer-links">
            <Link to="https://www.linkedin.com/in/victorreverter/" target='_blank'>LinkedIn</Link>
            <Link to="https://twitter.com/victor_reverter" target='_blank'>X (Twitter)</Link>
            <Link to="https://www.instagram.com/victorreverter/" target='_blank'>Instagram</Link>
            <Link to="https://www.behance.net/VictorReverter" target='_blank'>Behance</Link>
        </div>
        <p className='copyright'>&copy; 2024 Victor Reverter. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;