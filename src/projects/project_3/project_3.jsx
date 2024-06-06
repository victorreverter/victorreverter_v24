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

// STYLES ZONE ====================================

import stylesBlock from './pics/styles.avif'

import brandBlock from './pics/brand.avif'
import brandOne from './pics/brand_1.avif'
import brandTwo from './pics/brand_2.avif'
import brandThree from './pics/brand_3.avif'
import brandFour from './pics/brand_4.avif'
import brandFive from './pics/brand_5.avif'

import typographyBlock from './pics/typography.avif'
import typographyOne from './pics/typography_1.avif'
import typographyTwo from './pics/typography_2.avif'

import colourBlock from './pics/colour.avif'
import colourOne from './pics/colour_1.avif'
import colourTwo from './pics/colour_2.avif'

import imageBlock from './pics/images.avif'
import imageOne from './pics/images_1.avif'

import spacingBlock from './pics/spacing.avif'
import spacingOne from './pics/spacing_1.avif'

import gridsBlock from './pics/grids.avif'
import gridsOne from './pics/grids_1.avif'
import gridsTwo from './pics/grids_2.avif'
import gridsThree from './pics/grids_3.avif'

// COMPONENTS ZONE ====================================

import componentsBlock from './pics/components-pic.avif'

import accordion from './pics/components/accordion.avif'
import button from './pics/components/button.avif'
import iconset from './pics/components/iconset.avif'
import backlink from './pics/components/backlink.avif'
import breadcrumbs from './pics/components/breadcrumbs.avif'
import charactercount from './pics/components/charactercount.avif'
import checkboxes from './pics/components/checkboxes.avif'
import details from './pics/components/details.avif'
import cookieBanner from './pics/components/cookiebanner.avif'
import dateInput from './pics/components/dateinput.avif'
import errorMessage from './pics/components/errormessage.avif'
import errorSummary from './pics/components/errorsummary.avif'

// MOCKUPS ZONE =======================================

import ProjectScreen from './pics/project_screen.avif'

import Carousel from '../../components/Carousel';

const Project_3 = () => {

  const carouselItemsI = [
    { image: brandTwo, alt: 'brand-two' },
    { image: brandThree, alt: 'brand-three' },
    { image: brandFour, alt: 'brand-four' },
    { image: brandFive, alt: 'brand-five' }
    // Add more items as needed
  ];

  const carouselItemsII = [
    { image: gridsOne, alt: 'grids-one' },
    { image: gridsTwo, alt: 'grids-two' },
    { image: gridsThree, alt: 'grids-three' }
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
        <div className={getElementClass('ideationPhase')} onClick={() => scrollToElement('ideationPhase')}>
          Ideation
        </div>
        <div className={getElementClass('competitiveAnalysis')} onClick={() => scrollToElement('competitiveAnalysis')}>
          Competitive Analysis
        </div>
        <div className={getElementClass('stylesBlock')} onClick={() => scrollToElement('stylesBlock')}>
          Styles
        </div>
        <div className={getElementClass('componentsBlock')} onClick={() => scrollToElement('componentsBlock')}>
          Components
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

          <div className="element-block">
            <p className="title-elem">Identifying successful components</p>
            <p className="paragraph-elem">While the UK Government Design System and Canada.ca offer valuable inspiration,  Spain has its own unique needs and considerations. Here's how we can adapt successful components and best practices.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Successful Components to Adopt</p>
            <p className="paragraph-elem">Core UI Components: A core library of reusable UI components (buttons, forms, navigation elements) adapted to Spanish visual language and cultural norms (e.g., font styles, color palettes) can ensure consistency across all government websites.</p>
            <p className="paragraph-elem">Accessibility Features: Implementing accessibility best practices from established Design Systems is crucial. This includes features like clear text hierarchy, high color contrast, and keyboard navigation to cater to users with disabilities.</p>
            <p className="paragraph-elem">Responsive Design Principles: Ensuring all websites are responsive and deliver an optimal user experience across desktop, tablet, and mobile devices is vital for a mobile-first society like Spain.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Best Practices to Adapt</p>
            <p className="paragraph-elem">User-Centered Design: Like Canada.ca, a strong focus on user research and iterative design would ensure the Spanish Design System supply to the specific needs of Spanish citizens.</p>
            <p className="paragraph-elem">Clear and Concise Language: Adapting Canada's focus on plain language is key. Government websites should use clear and concise Spanish, avoiding bureaucratic jargon as much as possible, to ensure all users can easily understand the information presented.</p>
            <p className="paragraph-elem">Collaborative Approach: Considering a collaborative approach like the UK system could foster collaboration and continuous improvement within the Spanish government and developer team.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Potential Areas for Improvement</p>
            <p className="paragraph-elem">Cultural Considerations: While adopting core components, there's room for customization. Color palettes and design elements should reflect Spanish cultural sensibilities while maintaining accessibility standards.</p>
            <p className="paragraph-elem">Legacy Systems Integration: Existing government websites might use outdated technologies. The Design System should be flexible enough to integrate with legacy systems while paving the way for future modernization.</p>
            <p className="paragraph-elem">Multilingual Support: Spain has a multilingual population. While Spanish would be the primary language, exploring options for offering content in other regional languages could enhance inclusivity. Like English, French, Castillian, Català, Valencià, Galego and Euskera.</p>
          </div>

          <img id="stylesBlock" className="horizontal-image" src={stylesBlock} alt={"styles-block"} />

          <div className="element-block">
            <p className="p-elem-contrast">Styles elements created</p>
            <p className="paragraph-elem">On this phase of the project the visual elements must be created to eventually use them in the component creation's phase.</p>
          </div>

          <img className="horizontal-image" src={brandBlock} alt={"brand-block"} />

          <img className="horizontal-image" src={brandOne} alt={"brand-one"} />

          <div className="element-block">
            <p className="p-elem-contrast">The Brand</p>
            <p className="paragraph-elem">The brand proposal in this case was fundamentally oriented to create a clean and full functional elements to use where it is required.</p>
          </div>

          <Carousel items={carouselItemsI} />

          <img className="horizontal-image" src={typographyBlock} alt={"typography-block"} />

          <img className="horizontal-image" src={typographyOne} alt={"typography-one"} />

          <img className="horizontal-image" src={typographyTwo} alt={"typography-two"} />

          <img className="horizontal-image" src={colourBlock} alt={"colour-block"} />

          <img className="horizontal-image" src={colourOne} alt={"colour-one"} />

          <img className="horizontal-image" src={colourTwo} alt={"colour-two"} />

          <img className="horizontal-image" src={imageBlock} alt={"image-block"} />

          <img className="horizontal-image" src={imageOne} alt={"image-one"} />

          <img className="horizontal-image" src={spacingBlock} alt={"spacing-block"} />

          <img className="horizontal-spacing" src={spacingOne} alt={"image-one"} />

          <img className="horizontal-image" src={gridsBlock} alt={"grids-block"} />

          <Carousel items={carouselItemsII} />

          <img id="componentsBlock" className="horizontal-image" src={componentsBlock} alt={"components-block"} />

          <div className="element-block">
            <p className="p-elem-contrast">Components elements created</p>
            <p className="paragraph-elem">On this phase of the project the Design System's components were made. The process begins with some sketches to see the whole base of components that will be required to this Spain Government proposal.</p>
          </div>

          <div className="element-block">
            <p className="paragraph-elem"><span>Accordion</span></p>
            <p className="paragraph-elem">A vertically stacked set of interactive headings that each reveal an associated section of content.</p>
          </div>

          <img className="horizontal-image" src={accordion} alt={"accordion"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Button</span></p>
            <p className="paragraph-elem">An interactive element that users can click to perform an action or submit data. This component is fundamental in user interfaces, providing a clear and accessible way to trigger events, such as form submissions, navigation, or initiating processes. Buttons are often styled to stand out and include descriptive text or icons to indicate their function.</p>
          </div>

          <img className="horizontal-image" src={button} alt={"button"} />
          
          <div className="element-block">
            <p className="paragraph-elem"><span>Icon Set</span></p>
            <p className="paragraph-elem">The whole set require for this Design System. Even when the main purpose is try to be less visual system because of the misunderstanding of only visual elements, the icons represent a relevant part of every app construction process nowadays.</p>
          </div>

          <img className="horizontal-image" src={iconset} alt={"iconset"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Back Link</span></p>
            <p className="paragraph-elem">A navigational element that allows users to return to the previous page or section they were viewing.</p>
          </div>

          <img className="horizontal-image" src={backlink} alt={"backlink"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Breadcrumbs</span></p>
            <p className="paragraph-elem">A horizontal trail of links that displays the hierarchical path from the homepage to the current page. With the purpose of help users understand their location within the site’s structure and easily navigate back to previous pages.</p>
          </div>

          <img className="horizontal-image" src={breadcrumbs} alt={"breadcrumbs"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Character count</span></p>
            <p className="paragraph-elem">A dynamic indicator that shows the number of characters entered in a text field. This component is useful for forms and text areas where character limits are enforced, ensuring users are aware of how much content they can input.</p>
          </div>

          <img className="horizontal-image" src={charactercount} alt={"charactercount"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Checkboxes</span></p>
            <p className="paragraph-elem">Interactive square boxes that users can check or uncheck to make binary selections, typically in forms or surveys. This component allows for the selection of multiple options from a list, providing flexibility in user choices.</p>
          </div>

          <img className="horizontal-image" src={checkboxes} alt={"checkboxes"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Details</span></p>
            <p className="paragraph-elem">Interactive elements that allow users to expand and collapse sections of content. This component is often used to hide and reveal additional information on a page, improving content organization and user experience by keeping pages uncluttered.</p>
          </div>

          <img className="horizontal-image" src={details} alt={"details"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Cookie Banner</span></p>
            <p className="paragraph-elem">A notification element that informs users about the website’s use of cookies and typically requests their consent. This component is essential for compliance with privacy regulations and helps users understand how their data will be used.</p>
          </div>

          <img className="horizontal-image" src={cookieBanner} alt={"cookiebanner"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Date input</span></p>
            <p className="paragraph-elem">A form field designed for entering dates. This component ensures date data is collected in a consistent format, reducing errors and improving the accuracy of date-related information.</p>
          </div>

          <img className="horizontal-image" src={dateInput} alt={"dateinput"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Error message</span></p>
            <p className="paragraph-elem">A notification that informs users of an issue or mistake that has occurred. Must appear near the source of the error and provides clear, specific guidance on how to correct it, enhancing the user experience by facilitating problem resolution.</p>
          </div>

          <img className="horizontal-image" src={errorMessage} alt={"errormessage"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Error summary</span></p>
            <p className="paragraph-elem">A consolidated list of errors presented at the top of a form or page. This component provides an overview of all issues that need attention, allowing users to quickly identify and navigate to each problem area, thereby improving the efficiency of error correction.</p>
          </div>

          <img className="horizontal-image" src={errorSummary} alt={"errorsummary"} />
          
          <div className="element-block">
            <p className="paragraph-elem"><span>Text</span></p>
            <p className="paragraph-elem">Descrip</p>
          </div>

          <img className="horizontal-image" src={accordion} alt={"accordion"} />

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