import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.jpg'

import SubCover from './pics/WorldCupWin.jpg'

import LogoStoryI from './pics/Previous_AFA_Logos.jpg'
import LogoStoryII from './pics/Other_Champions_3_Stars.jpg'

import SolutionI from './pics/Solution_I.jpg'

import AFASolution6 from './pics/Solution_VI.jpg'
import AFASolution7 from './pics/Solution_VII.jpg'
import AFASolution8 from './pics/Solution_VIII.jpg'

import TypographyI from './pics/Typography_I.jpg'
import TypographyII from './pics/Typography_II.jpg'
import TypographyIII from './pics/Typography_III.jpg'

import SocialI from './pics/Social_I.jpg'
import SocialII from './pics/Social_II.jpg'
import SocialIII from './pics/Social_III.jpg'
import SocialIV from './pics/Social_IV.jpg'

import StationateryIII from './pics/Stationatery_3.jpg'
import StationateryIV from './pics/Stationatery_4.jpg'
import StationateryV from './pics/Stationatery_5.jpg'
import StationateryVI from './pics/Stationatery_6.jpg'
import StationateryVII from './pics/Stationatery_7.jpg'
import StationateryVIII from './pics/Stationatery_8.jpg'
import StationateryIX from './pics/Stationatery_9.jpg'
import StationateryX from './pics/Stationatery_10.jpg'

import ProjectScreen from './pics/Project_Screen.jpg'

import AFAphone from './pics/WhitePhone.png'

import Carousel from '../../components/Carousel';

const Project_0 = () => {

  const carouselItemsI = [
    { image: AFASolution6, alt: 'solution-6' },
    { image: AFASolution7, alt: 'solution-7' },
    { image: AFASolution8, alt: 'solution-8' },
    // Add more items as needed
  ];

  const carouselItemsII = [
    { image: TypographyI, alt: 'typography-1' },
    { image: TypographyII, alt: 'typography-2' },
    { image: TypographyIII, alt: 'typography-3' },
    // Add more items as needed
  ];

  const carouselItemsIII = [
    { image: SocialI, alt: 'social-1' },
    { image: SocialII, alt: 'social-2' },
    { image: SocialIII, alt: 'social-3' },
    { image: SocialIV, alt: 'social-4' },
    // Add more items as needed
  ];

  const carouselItemsIV = [
    { image: StationateryX, alt: 'stationatery-10' },
    { image: StationateryIV, alt: 'stationatery-4' },
    { image: StationateryVI, alt: 'stationatery-6' },
    { image: StationateryIII, alt: 'stationatery-3' },
    { image: StationateryVIII, alt: 'stationatery-8' },
    { image: StationateryVII, alt: 'stationatery-7' },
    { image: StationateryV, alt: 'stationatery-5' },
    { image: StationateryIX, alt: 'stationatery-9' },
    // Add more items as needed
  ];

  //Timing Up a Cover Pic ==========================
  const [coverPic, setCoverPic] = useState(false);

  useEffect(() => {
    // Simulate setting coverPic after a delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setCoverPic(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []); // empty dependency array ensures useEffect runs once after initial render

  //Showing UP built ===============================

  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  //Syllabus Scroll ===============================

  const [currentElement, setCurrentElement] = useState(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setCurrentElement(id); // Set the current element ID
    }
  };

  const getElementClass = (id) => {
    if (id === currentElement) {
      return 'syllabus-element s-e-current';
    } else {
      return 'syllabus-element';
    }
  };

  return (
    <div className='project-box'>

      <div className="syllabus-container">
        <div className={getElementClass('projectHeader')} onClick={() => scrollToElement('projectHeader')}>
          Header
        </div>
        <div className={getElementClass('stationateryII')} onClick={() => scrollToElement('stationateryII')}>
          Step 1
        </div>
        <div className={getElementClass('scrollToElement')} onClick={() => scrollToElement('scrollToElement')}>
          Step 2
        </div>
      </div>

      <div className='project-container'>
        <div id="projectHeader" className='project-header'>
          <h2 className='title-project'>Title Project</h2>
          <h4 className='description-project'>An explanatory short paragraph, to show a first llok of this whole project.</h4>
          
          <div className="section-project">
            <h5>Date</h5>
            <p>Year</p>
          </div>

          <div className="section-project">
            <h5>Role</h5>
            <p>Role Element</p>
          </div>

          <div className="section-project">
            <h5>Category</h5>
            <p>Category Element</p>
          </div>
        </div>

        {/* <img className='cover-image-pro' src={coverImagePro} alt={"about-pic"} /> */}

        <div>
          <img className={`cover-image-pro ${coverPic ? 'cover-pic-visible' : 'cover-pic-hidden'}`} src={coverImagePro} alt={"about-pic"} />
        </div>

        <div className="project-main">
          {/* <h2 className="title-section">1. Introduction</h2>
          <h3 className="subtitle-section">Background</h3>
          <h3 className="sub-subtitle-section">Background</h3> */}

          <div className="element-block">
            <h3 className="subtitle-elem">#1 Subtitle</h3>
            <h2 className="title-elem">Head Title</h2>

            <p className="paragraph-elem p-elem-contrast">Looks new. Feels like home.</p>

            <p className="paragraph-elem">So then the first step was the Research process. For that I looked for the whole history of <a href="https://www.afa.com.ar/es/" target="_blank" rel="noopener noreferrer">AFA</a> logos, but also other "3 stars" proposals from Brazil, Italy & Germany when these federations reach the 3rd World Cup win.</p>

            {/* <div className="paragraphs-container">
              <p className="single-p">Fave is one of Southeast Asia's fintech startup that helps consumers save, while empowering small and medium-sized enterprises to grow in the digital economy. Fave's key offering includes cashless payments, online/offline deals and other offers. Fave has been acquired by PineLabs, an India-based unicorn on April 2021.</p>
            </div> */}
          </div>

          <img className="vertical-image" src={AFAphone} alt={"afa-phone"} />

          <div className="element-compact-block">
            <h3 className="subtitle-elem">#2 Subtitle</h3>
            <h2 className="title-elem">Head 2 Title</h2>

            <p className="paragraph-elem">So then the first step was the Research process. For that I looked for the whole history of <a href="https://www.afa.com.ar/es/" target="_blank" rel="noopener noreferrer">AFA</a> logos, but also other "3 stars" proposals from Brazil, Italy & Germany when these federations reach the 3rd World Cup win.</p>
          </div>

          <img className="horizontal-image" src={SubCover} alt={"sub-cover"} />

          {/* <img ref={targetRef} className={`single-image ${isVisible ? 'visibled' : 'hiddened'}`} src={SubCover} alt={"sub-cover"} /> */}

          <img className='vertical-image' src={LogoStoryI} alt={"logo-story-1"} />

          <div className="element-compact-block">
            <h3 className="subtitle-elem">#3 Subtitle</h3>
            <h2 className="title-elem">Head 3 Title</h2>

            <p className="paragraph-elem">So then the first step was the Research process.</p>
          </div>

          <img className='vertical-image' src={LogoStoryII} alt={"logo-story-2"} />

          <div className="element-compact-block">
            <h3 className="subtitle-elem">#4 Subtitle</h3>
            <h2 className="title-elem">Head 4 Title</h2>

            <p className="paragraph-elem">So then the first step was the Research process.</p>
          </div>

          {/* <div className="multi-pic-block">
            <img className='multi-image' src={LogoStoryI} alt={"logo-story-1"} />
            <img className='multi-image' src={LogoStoryII} alt={"logo-story-2"} />
          </div> */}

          {/* <div className="paragraphs-container">
            <p className="single-p">Then after these research and many sketches and proposals I pick this one as the new brand for Argentina & AFA.</p>
          </div> */}

          {/* <img className="single-image" src={SolutionI} alt={"solution-1"} /> */}
      
          <Carousel items={carouselItemsIV} />

          <img className="single-image" src={ProjectScreen} alt={"project-screen"} />
        
          {/* <Link to={"https://victorreverter.github.io/potusdata/"} target='_blank' className='btn-item'>
            <div className="container-text">
              <span>View Live</span>
            </div>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link> */}
        </div>

      </div>
    </div>
  )
}

export default Project_0