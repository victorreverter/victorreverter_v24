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
    <div className="project-box">
      <div className="syllabus-container">
        <div className={getElementClass('projectHeader')} onClick={() => scrollToElement('projectHeader')}>
          Introduction
        </div>
        <div className={getElementClass('processID')} onClick={() => scrollToElement('processID')}>
          Process
        </div>
        <div className={getElementClass('empathyID')} onClick={() => scrollToElement('empathyID')}>
          Empathy
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Define
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Ideate
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Prototype
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Design Principles
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Key features
        </div>
        <div className={getElementClass('#')} onClick={() => scrollToElement('#')}>
          Summary
        </div>
      </div>

      <div className='project-container'>
        <div id="projectHeader" className='project-header'>
          <h2 className='title-project'>Developing the app for a food on time information service</h2>
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

        <div>
          <img className="cover-image-pro cover-pic-visible" src={coverImagePro} alt={"about-pic"} />
        </div>

        <div className="project-main">

          <div className="element-block">
            <h2 className="title-elem">1. Introduction</h2>

            <p className="paragraph-elem">Related with the background of this UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
          </div>

          <img className="horizontal-image" src={IntroBackground} alt={"intro-background"} />

          <div className="element-block">
            <h2 className="title-elem">Goals</h2>

            <p className="paragraph-elem">For “Food on time” I define this following goals.</p>

            <h3 className="subtitle-elem">1. Refine</h3>
            <p className="paragraph-elem">Pulish through an app the new experience, visually and in usability. Unifiy and modernize aesthetics.</p>

            <h3 className="subtitle-elem">2. Scale</h3>
            <p className="paragraph-elem">Having the base of  the original products, scale the product making it more useful for the user.</p>

            <h3 className="subtitle-elem">3. Spread</h3>
            <p className="paragraph-elem">Having this refined and in scaling process product, spread with an app and give better access to this knowledge.</p>
          </div>

          <img className='vertical-image' src={IntroAudience} alt={"intro-audience"} />

          <div className="element-compact-block">
            <h2 className="subtitle-elem">Audience</h2>

            <p className="paragraph-elem">This UX Case is based in an already existed product, that is a searcher of seasoned fruits and vegetables on the European Area made by EUFIC.</p>
          </div>

          <img className="horizontal-image" src={IntroSolution} alt={"intro-solution"} />

          <div className="element-block">
            <h2 className="subtitle-elem">Solution</h2>

            <p className="paragraph-elem">And after the execution of a whole design process, we’re here with this product solution. I will explain it in the following screens.</p>
          </div>

          <div id="processID" className="element-block">
            <h2 className="title-elem">2. Process</h2>

            <p className="paragraph-elem">The case design was  developed using the following 4 steps:</p>
          </div>

          <img className="horizontal-image" src={DesignProcess} alt={"design-process"} />

          <div id="empathyID" className="element-block">
            <h2 className="title-elem">2.1 Empathy</h2>

            <h2 className="subtitle-elem">The Environment</h2>

            <p className="paragraph-elem">Considering that the those are non-profit organizations.</p>

            <p className="paragraph-elem">This "market" or environment is defined by two principal methods for displaying and sharing information about seasonal fruits and vegetables: lists and search.</p>

            <p className="paragraph-elem">We also discovered that there are not very extensive guides available for other regions, such as LATAM or Asia, in contrast to Europe and the US.</p>

            <p className="paragraph-elem">So this position EUFIC as the main reference in Europe for search seasoned fruits and vegetables.</p>
          </div>

          <img className="horizontal-image" src={TheEnvironment} alt={"the-environment"} />

          <div className="element-compact-block">
            {/* <p className="p-elem-contrast">Two key problems</p> */}
            <p className="subtitle-elem">Two key problems</p>

            <p className="paragraph-elem">Two key points are relevant in the research of this need the health and the economical ones. Speaking about this points, we see that make more accessible the knowledge to as much people as possible is crucial for a better health but also to alleviate the families and people expenses.</p>
          </div>

          <img className="vertical-image" src={TwoKeyProblem} alt={"two-key-problem"} />

          <div className="element-block">
            <p className="title-elem">Health problems key points</p>

            <p className="paragraph-elem">In the following screens, we will explain the key health-related findings concerning food habits. The key points in this field are Diabetes and Immune system.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Diabetes</p>

            <p className="paragraph-elem">Talking about diabetes is strictly related with obesity and overweight. In 2000, there were an estimated 16.8 million adults with diabetes in the European Union (EU) by 2019, this number had increased to 32.3 million, this represents an increase of 89% over 19 years. The prevalence of diabetes in the EU is expected to continue to increase, reaching 38 million by 2030.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Immune system</p>

            <p className="paragraph-elem">Immune system is really related with a healthy diet, a diet that is high in processed foods, sugary drinks, and unhealthy fats can also weaken the immune system. These foods can damage the cells of the immune system and make it difficult for them to function properly. Apart whole grains, fatty fish, yogurt and lean protein, fruits and veggies are an essential pillar of any immune system boost strategy.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">The increase in diabetes in Europe is due to a number of factors.</p>

            <p className="subtitle-elem">Overweight and obesity</p>
            <p className="paragraph-elem">Obesity is the single most important risk factor for type 2 diabetes. The prevalence of obesity in the EU has increased significantly in recent years, and this is a major driver of the increase in diabetes.</p>

            <p className="subtitle-elem">Physical inactivity</p>
            <p className="paragraph-elem">Physical inactivity is another important risk factor for type 2 diabetes. The prevalence of physical inactivity in the EU has also increased in recent years.</p>

            <p className="subtitle-elem">Age</p>
            <p className="paragraph-elem">The risk of developing type 2 diabetes increases with age. The population of the EU is aging, and this is also contributing to the increase in diabetes.</p>

            <p className="subtitle-elem">Unhealthy diet</p>
            <p className="paragraph-elem">An unhealthy diet, high in sugary drinks, processed foods, and saturated fats, is also a risk factor for type 2 diabetes. The prevalence of unhealthy diet in the EU has also increased in recent years.</p>
          </div>

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
    </div>
  )
}

export default Project_1