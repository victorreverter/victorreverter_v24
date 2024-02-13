import React, { useState, useEffect, useRef } from 'react';
// import '../styles/Header.css';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/header.css';

import VRLogo from '../assets/Red_VR.png'
import VRLogoMenu from '../assets/Light_VR.png'

import MenuIcon from '../assets/MenuIcon.png'
import CloseIcon from '../assets/CloseIcon.png'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const menuOptionsRef = useRef(null);
  const logohomeRef = useRef(null);
  const logohomemenuRef = useRef(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);
  // const logoHomeRef = useRef(null);

  useEffect(() => {
    const handleMenuClick = () => {
      const menuBtn = menuBtnRef.current;
      const menuOptions = menuOptionsRef.current;
      const logoHome = logohomeRef.current;
      const logoHomeMenu = logohomemenuRef.current;
      const menuIcon = menuIconRef.current;
      const closeIcon = closeIconRef.current;
      // const logoHome = logoHomeRef.current;

      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOptions.classList.add('menu-mobile-open');
        // logoHome.classList.add('svg-menu-open');

        logoHomeMenu.classList.add('vr-logo-open');
        logoHome.classList.remove('vr-logo-open');

        menuIcon.classList.remove('menu-icons-open');
        closeIcon.classList.add('menu-icons-open');

        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        setMenuOpen(true);
      } else {
        menuBtn.classList.remove('open');
        menuOptions.classList.remove('menu-mobile-open');
        // logoHome.classList.remove('svg-menu-open');

        logoHome.classList.add('vr-logo-open');
        logoHomeMenu.classList.remove('vr-logo-open');

        closeIcon.classList.remove('menu-icons-open');
        menuIcon.classList.add('menu-icons-open');

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

  // Function to close the menu when a mobile link is clicked
  const handleMobileLinkClick = () => {
    // setMenuOpen(false);
    // document.documentElement.style.overflow = 'initial';
    // document.body.style.overflow = 'initial';

    const menuBtn = menuBtnRef.current;
    const menuOptions = menuOptionsRef.current;
    const logoHome = logohomeRef.current;
    const logoHomeMenu = logohomemenuRef.current;
    const menuIcon = menuIconRef.current;
    const closeIcon = closeIconRef.current;

    menuBtn.classList.remove('open');
    menuOptions.classList.remove('menu-mobile-open');
    // logoHome.classList.remove('svg-menu-open');

    logoHome.classList.add('vr-logo-open');
    logoHomeMenu.classList.remove('vr-logo-open');

    closeIcon.classList.remove('menu-icons-open');
    menuIcon.classList.add('menu-icons-open');

    document.documentElement.style.overflow = 'initial';
    document.body.style.overflow = 'initial';
    setMenuOpen(false);
  };

  return (
    <div className="head-container">
        <Link id="logoHome" className="logo-home" to="/">
          <img id="vr_logo" className="vr-logos vr-logo-open" src={VRLogo} alt="logo_header" ref={logohomeRef} />
          <img id="vr_logo_menu" className="vr-logos" src={VRLogoMenu} alt="logo_header_menu" ref={logohomemenuRef} />
        </Link>

        {/* <h1 id="logoHome" className="logo-home" ref={logoHomeRef}>Your Name</h1> */}

        <div className="menus-container">
          <div id="menuContainer" className="menu-btn"  ref={menuBtnRef}>
            <img id="menu_icon" className="menu-icons menu-icons-open" src={MenuIcon} alt="menu_icon" ref={menuIconRef} />
            <img id="close_icon" className="menu-icons" src={CloseIcon} alt="close_icon" ref={closeIconRef} />
          </div>
        </div>

        <div id="menuOptions" className="menu-options" ref={menuOptionsRef}>
          <div className="links-container">
              <li className="link-menu">
                <Link to="/" onClick={handleMobileLinkClick}>Home</Link>
              </li>
              <li className="link-menu">
                <Link to="/work" onClick={handleMobileLinkClick}>Work</Link>
              </li>
              <li className="link-menu">
                <Link to="/about" onClick={handleMobileLinkClick}>About</Link>
              </li>
              <li className="link-menu">
                <Link to="mailto:victorreverterdesign@gmail.com" onClick={handleMobileLinkClick}>Contact</Link>
              </li>
          </div>
          <div className="menu-footer">
              <div className="menu-footer-container-links">
                  <a href="https://www.instagram.com/victorreverter/">Instagram</a>
                  <a href="https://www.behance.net/VictorReverter">Behance</a>
                  {/* <a href="#">Dribble</a> */}
                  {/* <a href="#">X (Twitter)</a> */}
                  <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
              </div>
              <p>© 2024 Victor Reverter. All rights reserved.</p>
          </div>
        </div>

        <div id="menuOptionsDesktop" className="menu-options-desktop">
          <div className="links-container-desktop">
              <li className="link-menu"><Link to="/">Home</Link></li>
              <li className="link-menu"><Link to="/work">Work</Link></li>
              {/* <li className="link-menu"><Link to="/projects/:id">Projects</Link></li> */}
              <li className="link-menu"><Link to="/about">About</Link></li>
              <li className="link-menu">
                <Link className='btn-view-allpro-txt' to="mailto:victorreverterdesign@gmail.com">
                  <div className="container-text">
                    <span>Contact</span>
                  </div>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </li>
          </div>
        </div>
    </div>
  );
}

// const Header = () => {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuBtnRef = useRef(null);
//   const menuOptionsRef = useRef(null);
//   const logohomeRef = useRef(null);
//   const logohomemenuRef = useRef(null);
//   // const logoHomeRef = useRef(null);

//   useEffect(() => {
//     const handleMenuClick = () => {
//       const menuBtn = menuBtnRef.current;
//       const menuOptions = menuOptionsRef.current;
//       const logoHome = logohomeRef.current;
//       const logoHomeMenu = logohomemenuRef.current;
//       // const logoHome = logoHomeRef.current;

//       if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOptions.classList.add('menu-mobile-open');
//         // logoHome.classList.add('svg-menu-open');

//         logoHomeMenu.classList.add('vr-logo-open');
//         logoHome.classList.remove('vr-logo-open');

//         document.documentElement.style.overflow = 'hidden';
//         document.body.style.overflow = 'hidden';
//         setMenuOpen(true);
//       } else {
//         menuBtn.classList.remove('open');
//         menuOptions.classList.remove('menu-mobile-open');
//         // logoHome.classList.remove('svg-menu-open');

//         logoHome.classList.add('vr-logo-open');
//         logoHomeMenu.classList.remove('vr-logo-open');

//         document.documentElement.style.overflow = 'initial';
//         document.body.style.overflow = 'initial';
//         setMenuOpen(false);
//       }
//     };

//     const menuBtn = menuBtnRef.current;
//     menuBtn.addEventListener('click', handleMenuClick);

//     return () => {
//       // Cleanup: Remove the event listener when the component unmounts
//       menuBtn.removeEventListener('click', handleMenuClick);
//     };
//   }, [menuOpen]);

//   return (
//     <div className="head-container">
//         <Link id="logoHome" className="logo-home" to="/">
//           <img id="vr_logo" className="vr-logos vr-logo-open" src={VRLogo} alt="logo_header" ref={logohomeRef} />
//           <img id="vr_logo_menu" className="vr-logos" src={VRLogoMenu} alt="logo_header_menu" ref={logohomemenuRef} />
//         </Link>

//         {/* <h1 id="logoHome" className="logo-home" ref={logoHomeRef}>Your Name</h1> */}

//         <div className="menus-container">
//           <div id="menuContainer" className="menu-btn"  ref={menuBtnRef}>
//             <div className="menu-btn-burger"></div>
//           </div>
//         </div>

//         <div id="menuOptions" className="menu-options" ref={menuOptionsRef}>
//           <div className="links-container">
//               <li className="link-menu"><Link to="/">Home</Link></li>
//               <li className="link-menu"><Link to="/work">Work</Link></li>
//               {/* <li className="link-menu"><Link to="/projects/:id">Projects</Link></li> */}
//               <li className="link-menu"><Link to="/about">About</Link></li>
//               <li className="link-menu"><Link to="mailto:victorreverterdesign@gmail.com">Contact</Link></li>
//           </div>
//           <div className="menu-footer">
//               <p>© 2024 Victor Reverter. All rights reserved.</p>
//               <div className="menu-footer-container-links">
//                   <a href="https://www.instagram.com/victorreverter/">Instagram</a>
//                   <a href="https://www.behance.net/VictorReverter">Behance</a>
//                   {/* <a href="#">Dribble</a> */}
//                   {/* <a href="#">X (Twitter)</a> */}
//                   <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
//               </div>
//           </div>
//         </div>

//         <div id="menuOptionsDesktop" className="menu-options-desktop">
//           <div className="links-container-desktop">
//               <li className="link-menu"><Link to="/">Home</Link></li>
//               <li className="link-menu"><Link to="/work">Work</Link></li>
//               {/* <li className="link-menu"><Link to="/projects/:id">Projects</Link></li> */}
//               <li className="link-menu"><Link to="/about">About</Link></li>
//               <li className="link-menu"><Link to="mailto:victorreverterdesign@gmail.com">Contact</Link></li>
//           </div>
//         </div>
//     </div>
//   );
// }

export default Header;