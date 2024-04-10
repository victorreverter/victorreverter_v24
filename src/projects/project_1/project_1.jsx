import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.jpg'

import IntroBackground from './pics/Intro_Background.jpg'
import IntroAudience from './pics/Intro_Audience.png'
import IntroSolution from './pics/Intro_Solution.jpg'

import DesignProcess from './pics/Design_Process.png'

import TheEnvironment from './pics/2.1_The_Environment.png'
import TwoKeyProblem from './pics/2.1_Two_Key_Problem.png'

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
        {/* <h3 className="sub-subtitle-section">Defining Scenario</h3> */}

        <h3 className="sub-subtitle-section">Background</h3>

        <div className="paragraphs-container">
          <p className="single-p">This UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
        </div>

        <img className="single-image" src={IntroBackground} alt={"intro-background"} />

        <h3 className="sub-subtitle-section">Goals defined</h3>

        <div className="paragraphs-container">

          <h4 className="header-p">1. Refine</h4>
          <p className="single-p">Pulish through an app the new experience, visually and in usability. Unifiy and modernize aesthetics.</p>

          <h4 className="header-p">2. Scale</h4>
          <p className="single-p">Having the base of  the original products, scale the product making it more useful for the user.</p>

          <h4 className="header-p">3. Spread</h4>
          <p className="single-p">Having this refined and in scaling process product, spread with an app and give better access to this knowledge.</p>
        </div>

        <h3 className="sub-subtitle-section">Audience</h3>

        <div className="paragraphs-container">
          <p className="single-p">This UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
        </div>

        <img className="single-image" src={IntroAudience} alt={"intro-audience"} />

        <h3 className="sub-subtitle-section">Solution</h3>

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

        <h3 className="sub-subtitle-section">The Environment</h3>

        <div className="paragraphs-container">
          <p className="single-p">Considering that the those are non-profit organizations.</p>
          <p className="single-p">This "market" or environment is defined by two principal methods for displaying and sharing information about seasonal fruits and vegetables: lists and search.</p>
          <p className="single-p">We also discovered that there are not very extensive guides available for other regions, such as LATAM or Asia, in contrast to Europe and the US.</p>
          <p className="single-p">So this position EUFIC as the main reference in Europe for search seasoned fruits and vegetables.</p>
        </div>

        <img className="single-image" src={TheEnvironment} alt={"the-environment"} />

        <h3 className="sub-subtitle-section">Two key problems</h3>

        <div className="paragraphs-container">
          <p className="single-p">Two key points are relevant in the research of this need the health and the economical ones. Speaking about this points, we see that make more accessible the knowledge to as much people as possible is crucial for a better health but also to alleviate the families and people expenses.</p>
        </div>

        <img className="single-image" src={TwoKeyProblem} alt={"two-key-problem"} />

        <h2 className="subtitle-section">Health problems key points</h2>

        <div className="paragraphs-container">
          <p className="single-p">In the following screens, we will explain the key health-related findings concerning food habits. The key points in this field are Diabetes and Immune system.</p>
        </div>

        <div className="paragraphs-container">
          <div className="split-block">
            <h3 className="sub-subtitle-section">Diabetes</h3>
            <p className="regular-p">Talking about diabetes is strictly related with obesity and overweight. In 2000, there were an estimated 16.8 million adults with diabetes in the European Union (EU) by 2019, this number had increased to 32.3 million, this represents an increase of 89% over 19 years. The prevalence of diabetes in the EU is expected to continue to increase, reaching 38 million by 2030.</p>
          </div>
          <div className="split-block">
            <h3 className="sub-subtitle-section">Immune system</h3>
            <p className="regular-p">Immune system is really related with a healthy diet, a diet that is high in processed foods, sugary drinks, and unhealthy fats can also weaken the immune system. These foods can damage the cells of the immune system and make it difficult for them to function properly. Apart whole grains, fatty fish, yogurt and lean protein, fruits and veggies are an essential pillar of any immune system boost strategy.</p>
          </div>
        </div>

         <div className="paragraphs-container">
          <p className="single-p">The increase in diabetes in Europe is due to a number of factors.</p>
          <h4 className="header-p">Overweight and obesity</h4>
          <p className="single-p">Obesity is the single most important risk factor for type 2 diabetes. The prevalence of obesity in the EU has increased significantly in recent years, and this is a major driver of the increase in diabetes.</p>
          
          <h4 className="header-p">Physical inactivity</h4>
          <p className="single-p">Physical inactivity is another important risk factor for type 2 diabetes. The prevalence of physical inactivity in the EU has also increased in recent years.</p>

          <h4 className="header-p">Age</h4>
          <p className="single-p">The risk of developing type 2 diabetes increases with age. The population of the EU is aging, and this is also contributing to the increase in diabetes.</p>

          <h4 className="header-p">Unhealthy diet</h4>
          <p className="single-p">An unhealthy diet, high in sugary drinks, processed foods, and saturated fats, is also a risk factor for type 2 diabetes. The prevalence of unhealthy diet in the EU has also increased in recent years.</p>
        </div>

        <div className="paragraphs-container">
          <h3 className="sub-subtitle-section">Preventing Diabetes</h3>
          <p className="single-p">The increase in diabetes is a major public health challenge in Europe. It is estimated that diabetes costs the EU economy a ton of millions per year.</p>
          <p className="single-p">There are a number of things that can be done to address this challenge, including:</p>
        </div>

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