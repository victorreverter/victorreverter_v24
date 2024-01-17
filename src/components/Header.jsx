import React from 'react';
// import '../styles/Header.css';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/projects/:id">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;