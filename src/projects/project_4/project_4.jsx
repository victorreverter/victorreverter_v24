import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/placesure_cover.avif'

import ProjectScreen from './pics/project_screen.avif'

import AppObjectives from './pics/objectives.avif'
import AppTargetAudience from './pics/targetaudience.avif'
import CompetitiveAnalysis from './pics/competitiveanalysis.avif'
import KeyFeatures from './pics/keyfeatures.avif'

import BrandOne from './pics/brand1.avif'
import BrandTwo from './pics/brand2.avif'
import ColorPalette from './pics/colorpalette.avif'
import Typography from './pics/typography.avif'

import MockupsOne from './pics/mockups1.avif'
import MockupsTwo from './pics/mockups2.avif'
import MockupsThree from './pics/mockups3.avif'
import MockupsFour from './pics/mockups4.avif'
import MockupsFive from './pics/mockups5.avif'
import MockupsSix from './pics/mockups6.avif'
import MockupsSeven from './pics/mockups7.avif'

import Carousel from '../../components/Carousel';

const Project_4 = () => {

  // const carouselItemsI = [
  //   { image: AFASolution6, alt: 'solution-6' },
  //   { image: AFASolution7, alt: 'solution-7' },
  //   { image: AFASolution8, alt: 'solution-8' },
  //   // Add more items as needed
  // ];

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
        <div className={getElementClass('appObjectives')} onClick={() => scrollToElement('appObjectives')}>
          Objectives
        </div>
        <div className={getElementClass('targetAudience')} onClick={() => scrollToElement('targetAudience')}>
          Target Audience
        </div>
        <div className={getElementClass('competitiveAnalysis')} onClick={() => scrollToElement('competitiveAnalysis')}>
          Competitive Analysis
        </div>
        <div className={getElementClass('keyFeatures')} onClick={() => scrollToElement('keyFeatures')}>
          Key features
        </div>
        <div className={getElementClass('appBrand')} onClick={() => scrollToElement('appBrand')}>
          Brand
        </div>
        <div className={getElementClass('appMockups')} onClick={() => scrollToElement('appMockups')}>
          Mockups
        </div>
      </div>

      <div className='project-container'>
        <div id="projectHeader" className='project-header'>
          <h2 className='title-project'>PlaceSure, an enhance travel experience with AI</h2>
          <h4 className='description-project'>A mobile app designed to enhance the experience of tourists and travelers, through their trips through cities around the world.</h4>
          
          <div className="section-project">
            <h5>Date</h5>
            <p>2024</p>
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

        {/* <img className='cover-image-pro' src={coverImagePro} alt={"about-pic"} /> */}

        {/* <div>
          <img className={`cover-image-pro ${coverPic ? 'cover-pic-visible' : 'cover-pic-hidden'}`} src={coverImagePro} alt={"about-pic"} />
        </div> */}

        <div className="project-main">
          {/* <h2 className="title-section">1. Introduction</h2>
          <h3 className="subtitle-section">Background</h3>
          <h3 className="sub-subtitle-section">Background</h3> */}

          <div className="element-block">
            {/* <h3 className="subtitle-elem">#1 Subtitle</h3> */}
            <h2 className="title-elem">Briefing</h2>

            {/* <p className="paragraph-elem p-elem-contrast">Looks new. Feels like home.</p> */}

            <p className="paragraph-elem"><span>Placesure</span> is an innovative mobile app designed to enhance the experience of tourists and travelers by providing historical insights and fascinating stories about nearby locations. Utilizing location detection technology, <span>Placesure</span> offers a seamless blend of travel and education, transforming every journey into a rich narrative experience.</p>
          </div>

          <div id="appObjectives" className="element-block">
            <h2 className="title-elem">Objectives</h2>
            <p className="paragraph-elem">As an starting point the objectives of the app were defined.</p>
          </div>

          <img className="single-image" src={AppObjectives} alt={"app-objectives"} />

          <div className="element-block">
            <p className="paragraph-elem p-elem-contrast">Engage Users</p>
            <p className="paragraph-elem">Create an intuitive and visually appealing interface that captivates users and keeps them engaged.</p>

            <p className="paragraph-elem p-elem-contrast">Inform and Educate</p>
            <p className="paragraph-elem">Provide clear, concise, and captivating historical information about relevant nearby places.</p>

            <p className="paragraph-elem p-elem-contrast">Enhance Travel Experience</p>
            <p className="paragraph-elem">Make traveling more enriching by connecting users to the stories and history of their surroundings.</p>
          </div>

          <div id="targetAudience" className="element-block">
            <h2 className="title-elem">Target Audience</h2>
          </div>

          <img className="single-image" src={AppTargetAudience} alt={"app-target-audience"} />

          <div className="element-block">
            <p className="paragraph-elem p-elem-contrast">Tourist and Travelers</p>
            <p className="paragraph-elem">Individuals exploring new places and seeking to enhance their travel experience with historical context.</p>

            <p className="paragraph-elem p-elem-contrast">History Enthusiasts</p>
            <p className="paragraph-elem">Users with a keen interest in learning about the past and cultural significance of various locations.</p>

            <p className="paragraph-elem p-elem-contrast">Tech-Savvy Users</p>
            <p className="paragraph-elem">People comfortable with using mobile technology for navigation and information.</p>
          </div>

          <div id="competitiveAnalysis" className="element-block">
            <h2 className="title-elem">Competitive Analysis</h2>
          </div>

          <img className="single-image" src={CompetitiveAnalysis} alt={"competitive-analysis"} />

          <div className="element-block">
            <p className="paragraph-elem">In the competitive area of enhancing traveler's experiences, <span>PlaceSure</span> app faces some competition specially from Google Maps and Rick Steves' audio books.</p>

            <p className="paragraph-elem">Google Maps offers comprehensive navigation, real-time traffic updates, and detailed information about locations, which includes user reviews, photos, and popular times. Its integration with other Google services and widespread usage makes it a formidable competitor. However, Google Maps primarily focuses on navigation and local information rather than personalized, immersive experiences.</p>

            <p className="paragraph-elem">Rick Steves audio books, on the other hand, provide rich, detailed narratives and historical context for various tourist destinations, catering to travelers seeking a deeper understanding of the places they visit. While these audio books offer valuable insights and storytelling, they lack the interactive and dynamic features that an AI-enhanced app can provide.</p>

            <p className="paragraph-elem">So, the unique value of <span>PlaceSure</span> lies in its ability to offer personalized recommendations, real-time insights, and interactive experiences that adapt to the user's preferences and location, thus bridging the gap between comprehensive navigation and engaging, informative content.</p>
          </div>

          <div id="keyFeatures" className="element-block">
            <h2 className="title-elem">Key Features</h2>
            <p className="paragraph-elem">Finally with this previous research information, the key features that the app must have were concretized.</p>
          </div>

          <img className="single-image" src={KeyFeatures} alt={"key-features"} />

          <div className="element-block">
            <p className="paragraph-elem p-elem-contrast">Location Detection</p>
            <p className="paragraph-elem">Automatically detects the user’s location and suggests nearby historical sites and points of interest.</p>

            <p className="paragraph-elem p-elem-contrast">Interactive Maps</p>
            <p className="paragraph-elem">Visually engaging maps showing nearby attractions with historical significance.</p>

            <p className="paragraph-elem p-elem-contrast">Narrative Content</p>
            <p className="paragraph-elem">Engaging and well-researched stories, facts, and anecdotes about each location.</p>

            <p className="paragraph-elem p-elem-contrast">User-Friendly Interface</p>
            <p className="paragraph-elem">Simple, intuitive navigation ensuring ease of use for all age groups.</p>

            <p className="paragraph-elem p-elem-contrast">Individual Personalization</p>
            <p className="paragraph-elem">Option for users to save favorite spots, create custom tours, and receive tailored recommendations.</p>
          </div>

          <div id="appBrand" className="element-block">
            <h2 className="title-elem">Brand</h2>
            <p className="paragraph-elem">The brand proposal was designed in the main idea of simplicity, vibrant color palette and clean as much as possible that pop up the brand among other apps.</p>
          </div>

          <img className="single-image" src={BrandOne} alt={"brand-one"} />

          <img className="single-image" src={BrandTwo} alt={"brand-two"} />

          <img className="single-image" src={ColorPalette} alt={"color-palette"} />

          <img className="single-image" src={Typography} alt={"typography"} />

          <div id="appMockups" className="element-block">
            <h2 className="title-elem">Mockups</h2>
            <p className="paragraph-elem">With a previous definition phase, some mockups were created to illustrate the app and the main functions on it.</p>
          </div>

          <img className="single-image" src={MockupsOne} alt={"mockups-one"} />

          <div className="element-block">
            <h2 className="title-elem">Initial Landing</h2>
            <p className="paragraph-elem">This is the first glance over the app access. From the app icon until the login or sign steps.</p>
          </div>

          <img className="single-image" src={MockupsTwo} alt={"mockups-two"} />

          <div className="element-block">
            <h2 className="title-elem">Home & Menu open</h2>
            <p className="paragraph-elem">In the home will have the options of the three app methods to enhance the travel experiences.</p>
            <p className="paragraph-elem">Meanwhile the menu offer the options of see history and plan routes as key features.</p>
          </div>

          <img className="single-image" src={MockupsThree} alt={"mockups-three"} />

          <div className="element-block">
            <h2 className="title-elem">Map mode</h2>
            <p className="paragraph-elem">When the map mode is selected the interface look like this. An interface when we can ask for a place or see directly one in the map.</p>
          </div>

          <img className="single-image" src={MockupsFour} alt={"mockups-four"} />

          <div className="element-block">
            <h2 className="title-elem">Explore from the map</h2>
            <p className="paragraph-elem">This mockups show us what happen when the explore button in the map mode is selected to know more about this place.</p>
          </div>

          <img className="single-image" src={MockupsSeven} alt={"mockups-seven"} />

          <div className="element-block">
            <h2 className="title-elem">Immersive mode</h2>
            <p className="paragraph-elem">Probably the more "game-changing" feature of the app. Consist in a mode that allow the user by detection use the app and this one enhanced with AI tell him about the places where he can be in an auditive mode.</p>
            <p className="paragraph-elem">Also in this mode the user can talk with the AI.</p>
          </div>

          <img className="single-image" src={MockupsFive} alt={"mockups-five"} />

          <div className="element-block">
            <h2 className="title-elem">Narrative mode</h2>
            <p className="paragraph-elem">Is a similar query interface like other AI services. But inside an app like this and with a database focused on travel experiences make possible to the user receive more accurate answers.</p>
          </div>

          <img className="single-image" src={MockupsSix} alt={"mockups-six"} />

          {/* <img className="vertical-image" src={AFAphone} alt={"afa-phone"} /> */}
      
          {/* <Carousel items={carouselItemsI} /> */}

          <div className="element-block">
            <h2 className="title-elem">Conclusion</h2>
            <p className="paragraph-elem">At the end this is just the beginning of the brilliant future that a product like <span>PlaceSure</span> could bring to scene in the following years.</p>

            <p className="paragraph-elem">The next is keep iterating over this project and try to make more than a reality.</p>
          </div>

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

export default Project_4