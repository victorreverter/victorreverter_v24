import React, { useState, useEffect, useRef } from 'react';
// import '../styles/Header.css';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/header.css';

import VRLogo from '../assets/Red_VR.png'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const menuOptionsRef = useRef(null);
  // const logoHomeRef = useRef(null);

  useEffect(() => {
    const handleMenuClick = () => {
      const menuBtn = menuBtnRef.current;
      const menuOptions = menuOptionsRef.current;
      // const logoHome = logoHomeRef.current;

      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOptions.classList.add('menu-mobile-open');
        // logoHome.classList.add('svg-menu-open');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        setMenuOpen(true);
      } else {
        menuBtn.classList.remove('open');
        menuOptions.classList.remove('menu-mobile-open');
        // logoHome.classList.remove('svg-menu-open');
        document.documentElement.style.overflow = 'initial';
        document.body.style.overflow = 'initial';
        setMenuOpen(false);
      }
    };

    const menuBtn = menuBtnRef.current;
    menuBtn.addEventListener('click', handleMenuClick);

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      menuBtn.removeEventListener('click', handleMenuClick);
    };
  }, [menuOpen]);

  // ===================================================================

  // const [menuOpen, setMenuOpen] = useState(false);
  // const [HTMLTag, setHTMLTag] = useState(document.documentElement);
  // const [BodyTag, setBodyTag] = useState(document.body);

  // useEffect(() => {
  //   const menuBtn = document.getElementById('menuContainer');
  //   const menuOptions = document.getElementById('menuOptions');
  //   const logoHome = document.getElementById('logoHome');

  //   const handleMenuClick = () => {
  //     if (!menuOpen) {
  //       menuBtn.classNameList.add('open');
  //       menuOptions.classList.add('menu-mobile-open');
  //       logoHome.classList.add('svg-menu-open');
  //       HTMLTag.style.overflow = 'hidden';
  //       BodyTag.style.overflow = 'hidden';
  //       setMenuOpen(true);
  //     } else {
  //       menuBtn.classList.remove('open');
  //       menuOptions.classList.remove('menu-mobile-open');
  //       logoHome.classList.remove('svg-menu-open');
  //       HTMLTag.style.overflow = 'initial';
  //       BodyTag.style.overflow = 'initial';
  //       setMenuOpen(false);
  //     }
  //   };

  //   menuBtn.addEventListener('click', handleMenuClick);

  //   return () => {
  //     // Cleanup: Remove the event listener when the component unmounts
  //     menuBtn.removeEventListener('click', handleMenuClick);
  //   };
  // }, [menuOpen, HTMLTag, BodyTag]);

  // ===================================================================

  // const [menuOpen, setMenuOpen] = useState(false);
  // const HTMLTag = document.documentElement;
  // const BodyTag = document.body;

  // const menuBtnRef = useRef(null);
  // const menuOptionsRef = useRef(null);
  // const logoHomeRef = useRef(null);

  // useEffect(() => {
  //   const menuBtn = menuBtnRef.current;
  //   const menuOptions = menuOptionsRef.current;
  //   const logoHome = logoHomeRef.current;

  //   if (!menuBtn || !menuOptions || !logoHome) {
  //     return; // Elements not available, do nothing
  //   }

  //   const handleMenuClick = () => {
  //     if (!menuOpen) {
  //       menuBtn.classList.add('open');
  //       menuOptions.classList.add('menu-mobile-open');
  //       logoHome.classList.add('svg-menu-open');
  //       HTMLTag.style.overflow = 'hidden';
  //       BodyTag.style.overflow = 'hidden';
  //       setMenuOpen(true);
  //     } else {
  //       menuBtn.classList.remove('open');
  //       menuOptions.classList.remove('menu-mobile-open');
  //       logoHome.classList.remove('svg-menu-open');
  //       HTMLTag.style.overflow = 'initial';
  //       BodyTag.style.overflow = 'initial';
  //       setMenuOpen(false);
  //     }
  //   };

  //   menuBtn.addEventListener('click', handleMenuClick);

  //   return () => {
  //     menuBtn.removeEventListener('click', handleMenuClick);
  //   };
  // }, [menuOpen, HTMLTag, BodyTag]);

  return (
    <div className="head-container">
        <Link id="logoHome" className="logo-home" to="/">
          <img src={VRLogo} alt="logo_header" />
        </Link>

        {/* <h1 id="logoHome" className="logo-home" ref={logoHomeRef}>Your Name</h1> */}

        <div className="menus-container">
          <div id="menuContainer" className="menu-btn"  ref={menuBtnRef}>
            <div className="menu-btn-burger"></div>
          </div>
        </div>

        <div id="menuOptions" className="menu-options" ref={menuOptionsRef}>
          <div className="links-container">
              <li className="link-menu"><Link to="/">Home</Link></li>
              <li className="link-menu"><Link to="/work">Work</Link></li>
              <li className="link-menu"><Link to="/projects/:id">Projects</Link></li>
              <li className="link-menu"><Link to="/about">About</Link></li>
          </div>
          <div className="menu-footer">
              <p>© 2024 Victor Reverter. All rights reserved.</p>
              <div className="menu-footer-container-links">
                  <a href="https://www.instagram.com/victorreverter/">Instagram</a>
                  <a href="https://www.behance.net/VictorReverter">Behance</a>
                  {/* <a href="#">Dribble</a> */}
                  {/* <a href="#">X (Twitter)</a> */}
                  <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
              </div>
          </div>
        </div>

        <div id="menuOptionsDesktop" className="menu-options-desktop">
          <div className="links-container">
              <li className="link-menu"><Link to="/">Home</Link></li>
              <li className="link-menu"><Link to="/work">Work</Link></li>
              <li className="link-menu"><Link to="/projects/:id">Projects</Link></li>
              <li className="link-menu"><Link to="/about">About</Link></li>
          </div>
        </div>
    </div>
  );
}

export default Header;