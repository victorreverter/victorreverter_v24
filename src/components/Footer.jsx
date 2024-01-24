import React from 'react';
// import './Footer.css';
import '../styles/footer.css';

import FooterLogo from '../assets/Big_VR_Logo_Light.png'

const Footer = () => {
  return (
    <footer id="footer-container">
      <div className='descriptive-container'>
        <img className="footer-pic" src={FooterLogo} alt="logo_header" />
        <h4 className='explicative-text'>This is the explicative text below my logo...</h4>
      </div>
      <div className="menu-footer-links">
          <a href="https://www.instagram.com/victorreverter/">Instagram</a>
          <a href="https://www.behance.net/VictorReverter">Behance</a>
          {/* <a href="#">Dribble</a> */}
          {/* <a href="#">X (Twitter)</a> */}
          <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
      </div>
      <p>&copy; 2024 Victor Reverter. All rights reserved.</p>
    </footer>
  );
}

export default Footer;