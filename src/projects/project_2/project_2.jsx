import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.avif'

import SubCover from './pics/WorldCupWin.avif'

import LogoStoryI from './pics/PreviousAFALogo.avif'
import LogoStoryII from './pics/OtherChampions3Stars.avif'

import SolutionI from './pics/SolutionI.avif'

import SolutionII from './pics/SolutionII.avif'
import SolutionIII from './pics/SolutionIII.avif'
import SolutionIV from './pics/SolutionIV.avif'
import SolutionV from './pics/SolutionV.avif'

import AFASolution6 from './pics/SolutionVI.avif'
import AFASolution7 from './pics/SolutionVII.avif'
import AFASolution8 from './pics/SolutionVIII.avif'

import ColorI from './pics/ColorI.avif'
import ColorII from './pics/ColorII.avif'

import TypographyI from './pics/TipographyI.avif'
import TypographyII from './pics/TipographyII.avif'
import TypographyIII from './pics/TipographyIII.avif'

import SocialI from './pics/SocialI.avif'
import SocialII from './pics/SocialII.avif'
import SocialIII from './pics/SocialIII.avif'
import SocialIV from './pics/SocialIV.avif'

import StationateryI from './pics/StationateryOne.avif'
import StationateryII from './pics/StationateryTwo.avif'

import StationateryIII from './pics/StationateryThree.avif'
import StationateryIV from './pics/StationateryFour.avif'
import StationateryV from './pics/StationateryFive.avif'
import StationateryVI from './pics/StationaterySix.avif'
import StationateryVII from './pics/StationaterySeven.avif'
import StationateryVIII from './pics/StationateryEight.avif'
import StationateryIX from './pics/StationateryNine.avif'
import StationateryX from './pics/StationateryTen.avif'

import ProjectScreen from './pics/ProjectScreen.avif'

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

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate which syllabus element is currently in view
      const syllabusElements = document.querySelectorAll('.syllabus-element');
      syllabusElements.forEach(element => {
        const section = document.getElementById(element.dataset.target);
        if (
          section.offsetTop <= scrollPosition + 200 &&
          section.offsetTop + section.offsetHeight > scrollPosition + 200
        ) {
          setCurrentElement(element.dataset.target);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToElement = id => {
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

  const getElementClass = id => {
    return id === currentElement ? 'syllabus-element s-e-current' : 'syllabus-element';
  };

  return (
    <div className="project-box">
      <div className="syllabus-container">
        <div className={getElementClass('projectHeader')} onClick={() => scrollToElement('projectHeader')} data-target="projectHeader">
          Introduction
        </div>
        <div className={getElementClass('historyLogos')} onClick={() => scrollToElement('historyLogos')} data-target="historyLogos">
          History
        </div>
        <div className={getElementClass('afaProposal')} onClick={() => scrollToElement('afaProposal')} data-target="afaProposal">
          Proposal
        </div>
        <div className={getElementClass('afaVariations')} onClick={() => scrollToElement('afaVariations')} data-target="afaVariations">
          Variations
        </div>
        <div className={getElementClass('colorPalette')} onClick={() => scrollToElement('colorPalette')} data-target="colorPalette">
          Color Palette
        </div>
        <div className={getElementClass('typographyChoosen')} onClick={() => scrollToElement('typographyChoosen')} data-target="typographyChoosen">
          Typography
        </div>
        <div className={getElementClass('afaApplication')} onClick={() => scrollToElement('afaApplication')} data-target="afaApplication">
          Applications
        </div>
        <div className={getElementClass('nowWhat')} onClick={() => scrollToElement('nowWhat')} data-target="nowWhat">
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