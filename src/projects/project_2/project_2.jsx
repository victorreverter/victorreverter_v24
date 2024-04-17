import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.jpg'

import SubCover from './pics/WorldCupWin.jpg'

import LogoStoryI from './pics/Previous_AFA_Logos.jpg'
import LogoStoryII from './pics/Other_Champions_3_Stars.jpg'

import SolutionI from './pics/Solution_I.jpg'

import SolutionII from './pics/Solution_II.jpg'
import SolutionIII from './pics/Solution_III.jpg'
import SolutionIV from './pics/Solution_IV.jpg'
import SolutionV from './pics/Solution_V.jpg'

import AFASolution6 from './pics/Solution_VI.jpg'
import AFASolution7 from './pics/Solution_VII.jpg'
import AFASolution8 from './pics/Solution_VIII.jpg'

import ColorI from './pics/Color_I.jpg'
import ColorII from './pics/Color_II.jpg'

import TypographyI from './pics/Typography_I.jpg'
import TypographyII from './pics/Typography_II.jpg'
import TypographyIII from './pics/Typography_III.jpg'

import SocialI from './pics/Social_I.jpg'
import SocialII from './pics/Social_II.jpg'
import SocialIII from './pics/Social_III.jpg'
import SocialIV from './pics/Social_IV.jpg'

import StationateryI from './pics/Stationatery_1.jpg'
import StationateryII from './pics/Stationatery_2.jpg'

import StationateryIII from './pics/Stationatery_3.jpg'
import StationateryIV from './pics/Stationatery_4.jpg'
import StationateryV from './pics/Stationatery_5.jpg'
import StationateryVI from './pics/Stationatery_6.jpg'
import StationateryVII from './pics/Stationatery_7.jpg'
import StationateryVIII from './pics/Stationatery_8.jpg'
import StationateryIX from './pics/Stationatery_9.jpg'
import StationateryX from './pics/Stationatery_10.jpg'


import ProjectScreen from './pics/Project_Screen.jpg'

import Carousel from '../../components/Carousel';

const Project_1 = () => {

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
        <div className={getElementClass('historyLogos')} onClick={() => scrollToElement('historyLogos')}>
          History
        </div>
        <div className={getElementClass('afaProposal')} onClick={() => scrollToElement('afaProposal')}>
          Proposal
        </div>
        <div className={getElementClass('afaVariations')} onClick={() => scrollToElement('afaVariations')}>
          Variations
        </div>
        <div className={getElementClass('colorPalette')} onClick={() => scrollToElement('colorPalette')}>
          Color Palette
        </div>
        <div className={getElementClass('typographyChoosen')} onClick={() => scrollToElement('typographyChoosen')}>
          Typography
        </div>
        <div className={getElementClass('afaApplication')} onClick={() => scrollToElement('afaApplication')}>
          Applications
        </div>
        <div className={getElementClass('nowWhat')} onClick={() => scrollToElement('nowWhat')}>
          Now what?
        </div>
      </div>

      <div className='project-container'>
        <div id="projectHeader" className='project-header'>
          <h2 className='title-project'>Rebranding of Argentina National Football Team</h2>
          <h4 className='description-project'>A branding redesign after the Argentina World Cup's victory in 2022.</h4>
          
          <div className="section-project">
            <h5>Date</h5>
            <p>2023</p>
          </div>

          <div className="section-project">
            <h5>Role</h5>
            <p>Brand Designer</p>
          </div>

          <div className="section-project">
            <h5>Category</h5>
            <p>Branding</p>
          </div>
        </div>

        <div>
          <img className="cover-image-pro cover-pic-visible" src={coverImagePro} alt={"about-pic"} />
        </div>

        <div className="project-main">

          <div className="element-block">
            <h2 className="title-elem">Intro</h2>

            <p className="paragraph-elem"><span>In December 2022,</span> Argentina won their 3rd FIFA World Cup, this event reveal the likely possibility of a rebrand of their Federation mark. With the Argentina victory against France on December 18th. The problem is revealed. It is Argentina with these new 3rd star need a rebrand?</p>
          </div>

          <img className="horizontal-image" src={SubCover} alt={"sub-cover"} />

          <div id="historyLogos" className="element-block">
            <h2 className="title-elem">History</h2>

            <p className="paragraph-elem">So then the first step was the Research process. For that I looked for the whole history of AFA logos, but also other "3 stars" proposals from Brazil, Italy & Germany when these federations reach the 3rd World Cup win.</p>
          </div>

          <img className='vertical-image' src={LogoStoryI} alt={"logo-story-1"} />
          <img className='vertical-image' src={LogoStoryII} alt={"logo-story-2"} />

          <div id="afaProposal" className="element-block">
            <h2 className="title-elem">Proposal</h2>

            <p className="paragraph-elem">Then after these research and many sketches and proposals I pick this one as the new brand for Argentina & AFA.</p>
          </div>

          <img className="horizontal-image" src={SolutionI} alt={"solution-1"} />

          <div id="afaVariations" className="element-block">
            <h2 className="title-elem">Variations</h2>
          </div>

          <img className='vertical-image' src={SolutionII} alt={"solution-2"} />

          <div className="element-compact-block">
            <p className="paragraph-elem">The proposal consist in a <span>clean & all integrated elements logo</span> except the 3 stars that have been placed right above the main part of the logo. Also we choose more vibrant colors and pulished the shapes to give a more modern appearance.</p>
          </div>

          <img className='vertical-image' src={SolutionIII} alt={"solution-3"} />

          <div className="element-compact-block">
            <p className="paragraph-elem">On other hand I do not only redesign the main logo but also create <span>another alternatives</span> based in history. Each proposal have one variant, the AFA has one without stars and one with, meanwhile the main logo has an outline variant.</p>
          </div>
          
          <img className='vertical-image' src={SolutionIV} alt={"solution-4"} />
          <img className='vertical-image' src={SolutionV} alt={"solution-5"} />

          <div className="element-block">
            <p className="paragraph-elem">Here we can see the possible patterns using the brand and certain color combinations.</p>
          </div>

          <Carousel items={carouselItemsI} />

          <div id="colorPalette" className="element-block">
            <h2 className="title-elem">Color Palette</h2>

            <p className="paragraph-elem">Respect color palette the following was the choosen one. A palette with white, black and some "Argentinian" essential colors.</p>
          </div>

          <img className='horizontal-image' src={ColorI} alt={"color-1"} />

          <img className='horizontal-image' src={ColorII} alt={"color-2"} />

          <div id="typographyChoosen" className="element-block">
            <h2 className="title-elem">Typography</h2>

            <p className="paragraph-elem">About typography two options were choosen. Belgrano as a serif typography family without more than just one variant and Catamaran as a sans-serif typography with 6 variants.</p>
          </div>

          <Carousel items={carouselItemsII} />

          <img className="horizontal-image" src={StationateryII} alt={"stationatery-2"} />

          <div id="afaApplication" className="element-block">
            <h2 className="title-elem">Applications</h2>

            <p className="paragraph-elem">In this modern era where social media presency is crutial and very important, I present some elements from the brand applied into this world.</p>
          </div>

          <Carousel items={carouselItemsIII} />

          <div className="element-block">
            <p className="paragraph-elem">Finally but not less, the stationatery elements that bring support to the brand will be show right below as examples about how the brand will or could be place in different elements, objects and products.</p>
          </div>

          <img className="single-image" src={StationateryI} alt={"stationatery-1"} />
      
          <Carousel items={carouselItemsIV} />

          <div id="nowWhat" className="element-block">
            <h2 className="title-elem">Now what?</h2>

            <p className="paragraph-elem">Now even when AFA will not use this brand, this will remain as a possible proposal to them if they woul like to consider it.</p>

            <p className="paragraph-elem">At resume create this rebrand was a really good challenge because always deal with an important brand is a challenge but also an opportunity for show up skills and capacities.</p>
          </div>

          <img className="horizontal-image" src={ProjectScreen} alt={"project-screen"} />
        
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