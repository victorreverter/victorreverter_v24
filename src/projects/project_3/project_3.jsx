import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/gobes_cover.avif'

import DesignProcess from './pics/design_process_pic.avif'

import DemographicsData from './pics/demographics.avif'
import QuestionAnswers from './pics/questions_answers.avif'
import PainPoints from './pics/pain_points.avif'
import GovUK from './pics/gov_uk_ref.avif'
import GovCanada from './pics/gov_canada_ref.avif'

import ProjectScreen from './pics/project_screen.avif'

import Carousel from '../../components/Carousel';

const Project_3 = () => {

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
        <div className={getElementClass('ideationPhase')} onClick={() => scrollToElement('ideationPhase')}>
          Ideation
        </div>
        <div className={getElementClass('competitiveAnalysis')} onClick={() => scrollToElement('competitiveAnalysis')}>
          Competitive Analysis
        </div>
      </div>

      <div className='project-container'>
        <div id="projectHeader" className='project-header'>
          <h2 className='title-project'>Design System for Spain Government</h2>
          <h4 className='description-project'>Building a cohesive Government experience for spanish citizens.</h4>
          
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
            <p>Product Designt</p>
          </div>
        </div>

        <div>
          <img className="cover-image-pro cover-pic-visible" src={coverImagePro} alt={"about-pic"} />
        </div>

        <div className="project-main">

          <div className="element-block">
            <h2 className="title-elem">Introduction</h2>
            {/* <h3 className="subtitle-elem">Building a cohesive Government experience for spanish citizens.</h3> */}

            {/* <p className="paragraph-elem p-elem-contrast">Looks new. Feels like home.</p> */}

            <p className="paragraph-elem">In today's digital world, citizens increasingly rely on government websites and online services to access information, complete tasks, and engage with their institution. The <span>Government of Spain</span> is used in this case to showing up the importance of providing a user-friendly and accessible online experience for everyone.</p>

            <p className="paragraph-elem">To achieve this goal, we are embarking on the development of a new design system. This system will establish a unified visual language and set of standards for all government websites and applications.</p>

            {/* <p className="paragraph-elem">So then the first step was the Research process. For that I looked for the whole history of <a href="https://www.afa.com.ar/es/" target="_blank" rel="noopener noreferrer">AFA</a> logos, but also other "3 stars" proposals from Brazil, Italy & Germany when these federations reach the 3rd World Cup win.</p> */}
          </div>

          {/* <img className="vertical-image" src={AFAphone} alt={"afa-phone"} /> */}

          {/* <img className="horizontal-image" src={SubCover} alt={"sub-cover"} /> */}

          <div className="element-block">
            <h2 className="title-elem">Design Process</h2>

            <p className="paragraph-elem">This project will employ a user-centered design process, where we'll identify user needs and iterate on solutions step by step. This ensures we develop (eventually) a product that truly addresses the challenges faced by our users.</p>
          </div>

          <img className="horizontal-image" src={DesignProcess} alt={"design-process"} />

          <div className="element-block">
            <p className="paragraph-elem">From ideation to deploy through design and developing the best experience possible.</p>
          </div>

          <div id="ideationPhase" className="element-block">
            <h2 className="title-elem">Ideation phase, research and user needs</h2>

            <p className="paragraph-elem">In the path to discover more and understand better a research process was initiated.</p>

            <p className="paragraph-elem">After conducting a survey with 55 potential users of Spanish Government services, we've gathered their views, experience and to collect quantitive and qualitative data.</p>
          </div>

          <img className="horizontal-image" src={DemographicsData} alt={"demographics-data"} />

          <div className="element-block">
            <p className="paragraph-elem">Right above you can see the data extracted from that survey in relation with demographics, important data like age, location and frequency of use of the Government services.</p>

            <p className="paragraph-elem">Additionally some key questions were made to get interesting results that are shown right below.</p>
          </div>

          <img className="horizontal-image" src={QuestionAnswers} alt={"question-answers"} />

          <div id="ideationPhase" className="element-block">
            <h2 className="title-elem">Interviews, key answers and opinions.</h2>
          </div>

          <div className="element-block">
            <h3 className="subtitle-elem">Interview One</h3>
            <p className="paragraph-elem"><span>Participant:</span> Miguel Martínez, 28, Madrid, uses government websites for unemployment benefits.</p>

            <p className="p-elem-contrast">Key points</p>
            <p className="paragraph-elem">Frustrated with the lack of mobile-friendliness on many government websites. "The links normally takes me out of the government main website"</p>
            <p className="paragraph-elem">Feels overwhelmed by the amount of text and legal jargon on some websites. "It takes forever to find the important information."</p>
          </div>

          <div className="element-block">
            <h3 className="subtitle-elem">Interview Two</h3>
            <p className="paragraph-elem"><span>Participant:</span> Isabel Hernández, 62, Seville, uses government websites for healthcare appointments and renewing her driver's license.</p>

            <p className="p-elem-contrast">Key points</p>
            <p className="paragraph-elem">Finds the visual design of many government websites outdated and confusing. "It all looks very bureaucratic and intimidating."</p>
            <p className="paragraph-elem">Prefers simple interfaces with clear icons and labels. "I don't need fancy graphics, just tell me what I need to do."</p>
            <p className="paragraph-elem">Worries about the accessibility of certain websites for people with visual impairments. "The font size is tiny, and the color contrast sometimes is bad."</p>
          </div>

          <div className="element-block">
            <h3 className="subtitle-elem">Interview Three</h3>
            <p className="paragraph-elem"><span>Participant:</span> David Lopez, 35, Valencia, uses government websites for requesting birth certificates and applying for student loans.</p>

            <p className="p-elem-contrast">Key points</p>
            <p className="paragraph-elem">Discouraged by the lengthy and redundant application processes across different websites. "Why do I need to type in the same personal information multiple times?"</p>
            <p className="paragraph-elem">Suggests the need for a centralized login system that allows users to access all government services with one account.</p>
            <p className="paragraph-elem">Wants clear progress indicators and confirmation messages when completing online forms. "It's frustrating not knowing if my application actually went through."</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Pain points</p>
            <p className="paragraph-elem">Based on the user research (surveys and interviews), some key pain points emerge.</p>
          </div>

          <img className="horizontal-image" src={PainPoints} alt={"paint-points"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Interface Inconsistencies</span></p>
            <p className="paragraph-elem">Users reported encountering different design layouts and button styles across various government websites.</p>
            <p className="paragraph-elem">Inconsistent form structures created confusion, with users needing to re-learn how to interact with each website.</p>

            <p className="paragraph-elem"><span>Difficulty Finding Information</span></p>
            <p className="paragraph-elem">Unreliable search functions made it challenging to locate relevant information. Keywords often yielded irrelevant results.</p>
            <p className="paragraph-elem">Scattered information architecture across different pages frustrated users who felt like they were "starting from scratch" on each website.</p>

            <p className="paragraph-elem"><span>Lack of User-Friendliness</span></p>
            <p className="paragraph-elem">Outdated website design felt bureaucratic and intimidating, with overwhelming amounts of text and legal jargon.</p>
            <p className="paragraph-elem">Lack of mobile-friendliness made completing online forms on phones a frustrating experience.</p>
            <p className="paragraph-elem">Lengthy and redundant application processes across different services required users to re-enter the same information.</p>
            <p className="paragraph-elem">Unclear progress indicators and confirmation messages left users unsure if their online forms were submitted successfully.</p>
            <p className="paragraph-elem">Accessibility concerns arose regarding font size, color contrast, potentially hindering users with visual impairments.</p>
            <p className="paragraph-elem">These findings highlight the urgent need for a unified Design System that prioritizes consistency, user-centered information architecture, mobile-friendliness, clear communication, and streamlined processes.</p>
          </div>

          <div id="competitiveAnalysis" className="element-block">
            <h2 className="title-elem">Competitive Analysis</h2>
            <p className="paragraph-elem">To have a well-directed focus we delved into successful examples from other government websites.</p>
          </div>

          <div className="element-block">
            <h2 className="title-elem">UK Government Design System</h2>
          </div>

          <img className="horizontal-image" src={GovUK} alt={"gov-uk"} />

          <div className="element-block">
            <p className="p-elem-contrast">Strengths</p>
            <p className="paragraph-elem">Extensive library of reusable UI components (buttons, forms) ensures a consistent user experience across all UK government websites.</p>
            <p className="paragraph-elem">Clear and comprehensive design guidelines encompass everything from typography and color palettes to accessibility best practices.</p>
            <p className="paragraph-elem">Collaborative approach allows for community contact and comment about the service and possible improvements.</p>

            <p className="p-elem-contrast">Potential Inspiration for Spanish Government Design System</p>
            <p className="paragraph-elem">Adapting the UK's component library to fit the specific needs of Spanish government services.</p>
            <p className="paragraph-elem">Utilizing their accessibility guidelines to ensure all Spanish government websites are inclusive for all users.</p>
            <p className="paragraph-elem">Using their community connection methods to receive feedback about services.</p>
          </div>

          <div className="element-block">
            <h2 className="title-elem">Canada Government Design System</h2>
          </div>

          <img className="horizontal-image" src={GovCanada} alt={"gov-canada"} />

          <div className="element-block">
            <p className="p-elem-contrast">Strengths</p>
            <p className="paragraph-elem">Strong focus on clear and concise language guides users through complex information.</p>
            <p className="paragraph-elem">Responsive design principles guarantee optimal user experience across all devices.</p>

            <p className="p-elem-contrast">Potential Inspiration for Spanish Government Design System</p>
            <p className="paragraph-elem">Implementing a user-centered design approach throughout the development of the Spanish Design System.</p>
            <p className="paragraph-elem">Adapting Canada's focus on plain language to ensure clear communication within Spanish government websites.</p>
            <p className="paragraph-elem">Leveraging their responsive design principles to make all Spanish government websites mobile-friendly.</p>
          </div>

          {/* <div className="element-compact-block">
            <h3 className="subtitle-elem">#4 Subtitle</h3>
            <h2 className="title-elem">Head 4 Title</h2>

            <p className="paragraph-elem">So then the first step was the Research process.</p>
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
    </div>
  )
}

export default Project_3