import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.jpg'

import IntroBackground from './pics/Intro_Background.jpg'
import IntroAudience from './pics/Intro_Audience.png'
import IntroSolution from './pics/Intro_Solution.jpg'

import DesignProcess from './pics/Design_Process.png'

import AFASolution6 from './pics/Solution_VI.jpg'
import AFASolution7 from './pics/Solution_VII.jpg'
import AFASolution8 from './pics/Solution_VIII.jpg'

import ProjectScreen from './pics/Project_Screen.jpg'

import Carousel from '../../components/Carousel';

const Project_1 = () => {

  const carouselItemsI = [
    { image: AFASolution6, alt: 'solution-6' },
    { image: AFASolution7, alt: 'solution-7' },
    { image: AFASolution8, alt: 'solution-8' },
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

  return (
    <div className='project-container'>
      <div className='project-header'>
        <h2 className='title-project'>FOT App</h2>
        <h4 className='description-project'>FOT what means "Food on time" is a project where an existing product is redefined to the next level.</h4>
        
        <div className="section-project">
          <h5>Date</h5>
          <p>2022</p>
        </div>

        <div className="section-project">
          <h5>Role</h5>
          <p>Product Designer</p>
        </div>

        <div className="section-project">
          <h5>Category</h5>
          <p>Product Design</p>
        </div>
      </div>

      {/* <img className='cover-image-pro' src={coverImagePro} alt={"about-pic"} /> */}

      <div>
        <img className={`cover-image-pro ${coverPic ? 'cover-pic-visible' : 'cover-pic-hidden'}`} src={coverImagePro} alt={"about-pic"} />
      </div>

      <div className="project-main">

        <h2 className="title-section">1. Introduction</h2>
        {/* <h2 className="subtitle-section">1.1 Introduction</h2> */}
        {/* <h1 className="sub-subtitle-section">Defining Scenario</h1> */}

        <h1 className="sub-subtitle-section">Background</h1>

        <div className="paragraphs-container">
          <p className="single-p">This UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
        </div>

        <img className="single-image" src={IntroBackground} alt={"intro-background"} />

        <h1 className="sub-subtitle-section">Goals defined</h1>

        <div className="paragraphs-container">

          <h4 className="header-p">1. Refine</h4>
          <p className="single-p">Pulish through an app the new experience, visually and in usability. Unifiy and modernize aesthetics.</p>

          <h4 className="header-p">2. Scale</h4>
          <p className="single-p">Having the base of  the original products, scale the product making it more useful for the user.</p>

          <h4 className="header-p">3. Spread</h4>
          <p className="single-p">Having this refined and in scaling process product, spread with an app and give better access to this knowledge.</p>
        </div>

        <h1 className="sub-subtitle-section">Audience</h1>

        <div className="paragraphs-container">
          <p className="single-p">This UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
        </div>

        <img className="single-image" src={IntroAudience} alt={"intro-audience"} />

        <h1 className="sub-subtitle-section">Solution</h1>

        <div className="paragraphs-container">
          <p className="single-p">And after the execution of a whole design process, we’re here with this product solution. I will explain it in the following screens.</p>
        </div>

        <img className="single-image" src={IntroSolution} alt={"intro-solution"} />

        <h2 className="title-section">2. Process</h2>

        <div className="paragraphs-container">
          <p className="single-p">The case design was  developed using the following 4 steps:</p>
        </div>

        <img className="single-image" src={DesignProcess} alt={"design-process"} />

        <h2 className="subtitle-section">2.1 Empathy</h2>

        {/* <div className="paragraphs-container">
          <p className="regular-p">The proposal consist in a clean & all integrated elements logo except the 3 stars that have been placed right above the main part of the logo. Also we choose more vibrant colors and pulished the shapes to give a more modern appearance.</p>
          <p className="regular-p">In other hand I do not only redesign the main logo but also create another alternative based in history. Each proposal have one variant, the AFA has one without stars and one with, meanwhile the main logo has an outline variant.</p>
        </div> */}

        {/* <div className="multi-pic-block">
          <img className='multi-image' src={SolutionII} alt={"solution-2"} />
          <img className='multi-image' src={SolutionIII} alt={"solution-3"} />
          <img className='multi-image' src={SolutionIV} alt={"solution-4"} />
          <img className='multi-image' src={SolutionV} alt={"solution-5"} />
        </div> */}

        {/* <Carousel items={carouselItemsI} /> */}

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
  )
}

export default Project_1