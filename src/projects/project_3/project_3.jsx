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

import compoSketch1 from './pics/componentssketch1.avif'
import compoSketch2 from './pics/componentssketch2.avif'
import compoSketch3 from './pics/componentssketch3.avif'
import compoSketch4 from './pics/componentssketch4.avif'

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
import fieldset from './pics/components/fieldset.avif'
import footer from './pics/components/footer.avif'
import header from './pics/components/header.avif'
import insettext from './pics/components/insettext.avif'
import notificationbanner from './pics/components/notificationbanner.avif'
import pagination from './pics/components/pagination.avif'
import panel from './pics/components/panel.avif'
import passwordinput from './pics/components/passwordinput.avif'
import radios from './pics/components/radios.avif'
import select from './pics/components/select.avif'
import summarylist from './pics/components/summarylist.avif'
import table from './pics/components/table.avif'
import tabs from './pics/components/tabs.avif'
import tag from './pics/components/tag.avif'
import tasklist from './pics/components/tasklist.avif'
import textarea from './pics/components/textarea.avif'
import textinput from './pics/components/textinput.avif'
import uploadfile from './pics/components/uploadfile.avif'
import warningtext from './pics/components/warningtext.avif'

// MOCKUPS ZONE =======================================
import mockupsBlock from './pics/mockups-pic.avif'

import mockupMobile1 from './pics/mockups/mobilemockup1.avif'
import mockupMobile2 from './pics/mockups/mobilemockup2.avif'
import mockupMobile3 from './pics/mockups/mobilemockup3.avif'
import mockupMobile4 from './pics/mockups/mobilemockup4.avif'

import mockupsDesktop1 from './pics/mockups/desktopmockup1.avif'
import mockupsDesktop2 from './pics/mockups/desktopmockup2.avif'
import mockupsDesktop3 from './pics/mockups/desktopmockup3.avif'
import mockupsDesktop4 from './pics/mockups/desktopmockup4.avif'
import mockupsDesktop5 from './pics/mockups/desktopmockup5.avif'
import mockupsDesktop6 from './pics/mockups/desktopmockup6.avif'
import mockupsDesktop7 from './pics/mockups/desktopmockup7.avif'
import mockupsDesktop8 from './pics/mockups/desktopmockup8.avif'
import mockupsDesktop9 from './pics/mockups/desktopmockup9.avif'

import benefitsDesignSystem from './pics/benefits_design_systems.avif'
import benefitsSpainGov from './pics/benefits_for_spain_government.avif'

import conclusion1 from './pics/conclusion_1.avif'
import conclusion2 from './pics/conclusion_2.avif'

import userTestingProcess from './pics/user_testing_process.avif'
import iterationProcess from './pics/iteration_process.avif'


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

  const carouselItemsIII = [
    { image: mockupMobile1, alt: 'mockup-mobile-1' },
    { image: mockupMobile2, alt: 'mockup-mobile-2' },
    { image: mockupMobile3, alt: 'mockup-mobile-3' },
    { image: mockupMobile4, alt: 'mockup-mobile-4' }
    // Add more items as needed
  ];

  const carouselItemsIV = [
    { image: compoSketch1, alt: 'components-sketch-1' },
    { image: compoSketch2, alt: 'components-sketch-2' },
    { image: compoSketch3, alt: 'components-sketch-3' },
    { image: compoSketch4, alt: 'components-sketch-4' }
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
        <div className={getElementClass('mockupsBlock')} onClick={() => scrollToElement('mockupsBlock')}>
          Mockups
        </div>
        <div className={getElementClass('impactValue')} onClick={() => scrollToElement('impactValue')}>
          Impact & Value
        </div>
        <div className={getElementClass('TestingIteration')} onClick={() => scrollToElement('TestingIteration')}>
          Testing & Iteration
        </div>
        <div className={getElementClass('ConclusionNextSteps')} onClick={() => scrollToElement('ConclusionNextSteps')}>
          Conclusion & Next steps
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
            <p>Product Design</p>
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

          <Carousel items={carouselItemsIV} />

          <div className="element-block">
            <p className="paragraph-elem">And after some sketches the creation of pulished components in digital version.</p>
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
            <p className="paragraph-elem"><span>Fieldset</span></p>
            <p className="paragraph-elem">A group of inputs accompanied by a legend. This component helps organize complex forms by visually grouping related fields, enhancing readability and usability.</p>
          </div>

          <img className="horizontal-image" src={fieldset} alt={"fieldset"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Footer</span></p>
            <p className="paragraph-elem">The bottom section of a webpage, this component could provides a consistent location for important but non-primary content across the site.</p>
          </div>

          <img className="horizontal-image" src={footer} alt={"footer"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Header</span></p>
            <p className="paragraph-elem">The top section of a webpage that usually includes branding, navigation links, and sometimes a search bar. This component provides a consistent and accessible area for essential site-wide elements, helping users navigate and understand the site’s structure.</p>
          </div>

          <img className="horizontal-image" src={header} alt={"header"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Inset text</span></p>
            <p className="paragraph-elem">A highlighted block of text set off from the main content, often with a distinct background color or border. This component is used to draw attention to important information or provide supplementary details, enhancing the readability and emphasis of critical messages.</p>
          </div>

          <img className="horizontal-image" src={insettext} alt={"insettext"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Notification banner</span></p>
            <p className="paragraph-elem">A prominent message area displayed at the top or bottom of a page, used to convey important information or alerts to users. This component is effective for delivering urgent updates, warnings, or confirmation messages that require immediate attention.</p>
          </div>

          <img className="horizontal-image" src={notificationbanner} alt={"notificationbanner"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Pagination</span></p>
            <p className="paragraph-elem">A navigation control that divides content into discrete pages and provides links to move between them. This component is essential for managing large datasets or content collections, improving load times and usability by allowing users to navigate through information in manageable chunks.</p>
          </div>
          
          <img className="horizontal-image" src={pagination} alt={"pagination"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Panel</span></p>
            <p className="paragraph-elem">A container element that groups related content or interface elements together within a distinct section of a page. This component helps organize information, providing a clear structure and improving the overall user experience by segmenting content into logical areas.</p>
          </div>

          <img className="horizontal-image" src={panel} alt={"panel"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Password input</span></p>
            <p className="paragraph-elem">A specialized form field designed for entering passwords, featuring obscured text to enhance security and privacy. This component typically includes additional functionalities like visibility toggles, strength indicators, and validation to ensure that the password meets security requirements and is entered correctly.</p>
          </div>

          <img className="horizontal-image" src={passwordinput} alt={"passwordinput"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Radios</span></p>
            <p className="paragraph-elem">A set of circular selection buttons that allow users to choose one option from a list of mutually exclusive choices. This component is commonly used in forms and surveys where only a single selection is permitted, ensuring clear and distinct choices.</p>
          </div>

          <img className="horizontal-image" src={radios} alt={"radios"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Select</span></p>
            <p className="paragraph-elem">A dropdown menu that allows users to choose one option from a predefined list. This component is useful for forms and interfaces where space is limited, providing a compact and user-friendly way to make selections from a large number of options.</p>
          </div>

          <img className="horizontal-image" src={select} alt={"select"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Summary list</span></p>
            <p className="paragraph-elem">A structured list that presents key pieces of information in a clear, concise format. Each item typically includes a label and a corresponding value, making it easy to review and understand essential details at a glance.</p>
          </div>

          <img className="horizontal-image" src={summarylist} alt={"summarylist"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Table</span></p>
            <p className="paragraph-elem">A grid of rows and columns used to display data in an organized manner. This component allows for easy comparison of information, facilitating the presentation of structured data such as schedules, statistics, or lists. text</p>
          </div>

          <img className="horizontal-image" src={table} alt={"table"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Tabs</span></p>
            <p className="paragraph-elem">A navigational component that divides content into multiple sections, with each section accessible via a labeled tab. This component helps organize related content within a single page, allowing users to switch between sections without leaving the page, thereby enhancing user experience and content accessibility.</p>
          </div>

          <img className="horizontal-image" src={tabs} alt={"tabs"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Tag</span></p>
            <p className="paragraph-elem">A small, clickable label that categorizes or highlights items with specific attributes or statuses. This component is often used to filter content, indicate metadata, or manage items in lists, helping users quickly identify and interact with related content.</p>
          </div>

          <img className="horizontal-image" src={tag} alt={"tag"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Tasklist</span></p>
            <p className="paragraph-elem">An organized list of actionable items or steps, often accompanied by checkboxes to mark completion. This component helps users manage and track progress on tasks, providing a clear and interactive way to handle to-do items or project steps.</p>
          </div>

          <img className="horizontal-image" src={tasklist} alt={"tasklist"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Textarea</span></p>
            <p className="paragraph-elem">A multi-line input field that allows users to enter large amounts of text. This component is ideal for collecting detailed information, such as comments or descriptions, and often includes features like word count and resizing to enhance usability.</p>
          </div>

          <img className="horizontal-image" src={textarea} alt={"textarea"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Text input</span></p>
            <p className="paragraph-elem">A single-line field where users can enter text. This component is widely used in forms for collecting short pieces of information, such as names, email addresses, or search queries, and often includes validation and formatting features.</p>
          </div>

          <img className="horizontal-image" src={textinput} alt={"textinput"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Upload file</span></p>
            <p className="paragraph-elem">An element that allows users to select and upload files from their device. This component typically includes a button to browse for files and displays the selected file name, facilitating the process of submitting documents, images, or other files.</p>
          </div>

          <img className="horizontal-image" src={uploadfile} alt={"uploadfile"} />

          <div className="element-block">
            <p className="paragraph-elem"><span>Warning text</span></p>
            <p className="paragraph-elem">A highlighted message that alerts users to important information or potential issues. This component is typically displayed with a distinct style, such as bold text or a colored background, to ensure it captures attention and conveys the urgency or significance of the warning.</p>
          </div>

          <img className="horizontal-image" src={warningtext} alt={"warningtext"} />

          <img id="mockupsBlock" className="horizontal-image" src={mockupsBlock} alt={"mockups-block"} />

          <div className="element-block">
            <p className="p-elem-contrast">Mockups created</p>
            <p className="paragraph-elem">During this phase of the project, mockups were created using the components of the Design System. The process was conceived with the intention of providing examples of what government websites could look like.</p>
          </div>

          <Carousel items={carouselItemsIII} />

          <img className="horizontal-image" src={mockupsDesktop1} alt={"mockups-desktop-1"} />

          <img className="horizontal-image" src={mockupsDesktop2} alt={"mockups-desktop-2"} />

          <img className="horizontal-image" src={mockupsDesktop3} alt={"mockups-desktop-3"} />

          <img className="horizontal-image" src={mockupsDesktop4} alt={"mockups-desktop-4"} />

          <img className="horizontal-image" src={mockupsDesktop5} alt={"mockups-desktop-5"} />

          <img className="horizontal-image" src={mockupsDesktop6} alt={"mockups-desktop-6"} />

          <img className="horizontal-image" src={mockupsDesktop7} alt={"mockups-desktop-7"} />

          <img className="horizontal-image" src={mockupsDesktop8} alt={"mockups-desktop-8"} />

          <img className="horizontal-image" src={mockupsDesktop9} alt={"mockups-desktop-9"} />

          <div id="impactValue" className="element-block">
            <h2 className="title-elem">Impact & Value in the proposition</h2>

            <p className="paragraph-elem">While the exact figures would depend on a full implementation and data collection, research suggests that Design Systems offer significant benefits across various areas like the following ones.</p>
          </div>

          <img className="horizontal-image" src={benefitsDesignSystem} alt={"benefits-design-system"} />

          <div className="element-block">
            <p className="p-elem-contrast">1 · Increased User Satisfaction:</p>
            <p className="paragraph-elem"><span>Reduced Frustration:</span> A consistent and user-friendly design across all government websites can significantly reduce user frustration and improve overall satisfaction. Studies by Nielsen Norman Group report that consistent interfaces can lead to a 20% increase in task completion rates.</p>
            <p className="paragraph-elem"><span>Improved Trust:</span> A cohesive visual language builds trust with users, as it conveys professionalism and a commitment to user experience.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">2 · Reduced Development Time:</p>
            <p className="paragraph-elem"><span>Reusable Components:</span> A library of pre-built and tested UI components (buttons, forms) eliminates the need for developers to recreate them from scratch for each website. This can lead to time savings of up to 37% according to research by Zeroheight.</p>
            <p className="paragraph-elem"><span>Streamlined Workflow:</span> Clear design guidelines and code snippets within the Design System empower developers to focus on building functionality instead of reinventing the design wheel.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">3 · Cost Savings:</p>
            <p className="paragraph-elem"><span>Reduced Maintenance Costs:</span> Maintaining a single Design System is significantly less expensive than managing the design and code of disparate government websites.</p>
            <p className="paragraph-elem"><span>Improved Efficiency:</span> Streamlined workflows and reduced development times translate to cost savings for the Spanish government.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">4 · Additional Benefits</p>
            <p className="paragraph-elem"><span>Improved Accessibility:</span> A well-designed Design System prioritizes accessibility best practices, ensuring all users, including those with disabilities, can easily interact with government websites.</p>
            <p className="paragraph-elem"><span>Enhanced Brand Identity:</span> A consistent visual language across all platforms strengthens the Spanish government's brand identity and fosters user recognition.</p>
          </div>

          <div id="impactValue" className="element-block">
            <h2 className="title-elem">Value in the proposition for Spain Government</h2>

            <p className="paragraph-elem">The current landscape of Spanish government websites presents a challenge for citizens and the government itself. Inconsistent interfaces, redundant information, and a lack of user-friendliness frustrate citizens and hinder efficient service delivery.</p>

            <p className="paragraph-elem">As a well-designed Design System this one must offers a compelling value proposition:</p>
          </div>

          <img className="horizontal-image" src={benefitsSpainGov} alt={"benefits-spain-gov"} />

          <div className="element-block">
            <p className="p-elem-contrast">1 · Improved User Experience:</p>
            <p className="paragraph-elem"><span>Increased User Satisfaction:</span> A consistent and user-friendly experience across all government websites leads to happier and less frustrated citizens. This translates to higher trust in the government and a more positive perception of its services.</p>
            <p className="paragraph-elem"><span>Enhanced Accessibility:</span> By prioritizing accessibility best practices, the Design System ensures all citizens, regardless of ability, can navigate and access government services. This fosters inclusivity and promotes equal access to information.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">2 · Cost Savings & Efficiency:</p>
            <p className="paragraph-elem"><span>Reduced Development Time:</span> Reusable UI components and clear design guidelines significantly decrease the time and resources needed to develop and maintain government websites. Developers can focus on building functionalities instead of reinventing the design each time.</p>
            <p className="paragraph-elem"><span>Streamlined Maintenance:</span> Managing a single Design System is far more cost-effective than maintaining the design and code of numerous independent websites.</p>
            <p className="paragraph-elem"><span>Improved Staff Productivity:</span> Clear documentation and guidelines within the Design System empower government staff to make informed decisions about website content and presentation, reducing the need for external design resources.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">3 · Additional Benefits:</p>
            <p className="paragraph-elem"><span>Stronger Brand Identity:</span> A cohesive visual language across platforms reinforces the Spanish government's brand and fosters user recognition. This builds trust and strengthens the perception of a professional and efficient government.</p>
            <p className="paragraph-elem"><span>Reduced Risk of Errors:</span> Consistent design principles minimize the possibility of inconsistencies and errors across different websites, leading to a more reliable and trustworthy user experience.</p>
          </div>

          <div className="element-block">
            <p className="paragraph-elem">Investing in a Spanish Design System is an investment in its citizens. It empowers them to navigate government services with ease, fosters trust in the government, and delivers significant cost savings and efficiency gains. This approach creates a win-win situation for both Spanish citizens and the government.</p>
          </div>

          <div id="TestingIteration" className="element-block">
            <h2 className="title-elem">Testing and the value on it</h2>

            <h2 className="paragraph-elem">The phase of testing and iteration must be essential, even when this is a simulated project. We take time to develop the process and methodology to make effective this phase.</h2>

            <p className="paragraph-elem">We would primarily use usability testing to evaluate the effectiveness, efficiency, and user satisfaction of the proposed Design System components.</p>
          </div>

          <img className="horizontal-image" src={userTestingProcess} alt={"user-testing-process"} />

          <div className="element-block">
            <p className="p-elem-contrast">Recruiting Participants:</p>
            <p className="paragraph-elem"><span>·</span> We would recruit a diverse group of Spanish citizens who frequently interact with government websites.</p>
            <p className="paragraph-elem"><span>·</span> The group would represent different age ranges, technical abilities, and geographic locations.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Testing Setup:</p>
            <p className="paragraph-elem"><span>·</span> We'd create high-fidelity prototypes of the core Design System components (e.g., forms, buttons) using design tools like Figma or Adobe XD.</p>
            <p className="paragraph-elem"><span>·</span> Ideally, these prototypes would be in Spanish and accessible from various devices (desktop, mobile) to reflect real-world scenarios.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Testing Tasks:</p>
            <p className="paragraph-elem"><span>·</span> Participants would be given a set of realistic tasks to complete using the Design System components.</p>
            <p className="paragraph-elem"><span>·</span> These tasks would simulate common actions users would perform on government websites, such as searching for information, filling out forms, or navigating to specific services.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Data Collection Techniques:</p>
            <p className="paragraph-elem"><span>Think-aloud protocol:</span> We'd encourage participants to verbalize their thoughts and feelings while completing the tasks. This allows us to understand their thought process and identify potential areas of confusion.</p>
            <p className="paragraph-elem"><span>Screen recordings:</span> Recording user interactions with the prototypes helps analyze user behavior and pinpoint usability issues.</p>
            <p className="paragraph-elem"><span>Post-test interviews:</span> A short interview after each session allows users to elaborate on their experience and provide specific feedback on the Design System components.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Analyzing Results:</p>
            <p className="paragraph-elem">We'd analyze the collected data (think-aloud transcripts, screen recordings, interview notes) to identify recurring themes and user pain points.</p>
            <p className="paragraph-elem">By analyzing task completion times, error rates, and user feedback, we can gauge the effectiveness and efficiency of the Design System components.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Benefits of User Testing:</p>
            <p className="paragraph-elem"><span>·</span> User testing allows us to identify and address usability issues early in the design process.</p>
            <p className="paragraph-elem"><span>·</span> It ensures the Design System components are intuitive and meet the needs of Spanish users.</p>
            <p className="paragraph-elem"><span>·</span> By iterating based on user feedback, we can create a user-centered Design System that empowers citizens to efficiently navigate government services.</p>
            <p className="paragraph-elem">This user testing plan showcases a proactive approach to design and would be crucial for refining the Spanish Design System before a full-scale implementation.</p>
          </div>

          <div className="element-block">
            <h2 className="title-elem">Iteration process</h2>

            <h2 className="paragraph-elem">This user testing plan showcases a proactive approach to design and would be crucial for refining the Spanish Design System before a full-scale implementation.</h2>
          </div>

          <img className="horizontal-image" src={iterationProcess} alt={"iteration-process"} />

          <div className="element-block">
            <p className="p-elem-contrast">1 · Analyzing User Feedback</p>
            <p className="paragraph-elem"><span>·</span> Users struggling to find specific information on a form due to unclear labeling.</p>
            <p className="paragraph-elem"><span>·</span> Difficulty completing tasks on mobile devices due to small buttons or unresponsive layouts.</p>
            <p className="paragraph-elem"><span>·</span> Confusion around the meaning of certain icons used in the navigation elements.</p>
          </div>


          <div className="element-block">
            <p className="p-elem-contrast">2 · Prioritizing Refinements:</p>
            <p className="paragraph-elem">Based on the frequency and severity of issues identified, we'd prioritize which components require the most significant changes.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">3 · Refining Design Components:</p>
            <p className="paragraph-elem">Here's how user feedback might translate into specific refinements:</p>
            <p className="paragraph-elem"><span>· Clarity over Confusion:</span> Clarity over Confusion: If users found form labels unclear, we'd revise them using simpler and more concise language in Spanish.</p>
            <p className="paragraph-elem"><span>· Mobile-First Optimization:</span> Based on user testing on mobile devices, buttons might be enlarged, and layouts adjusted to ensure a responsive and user-friendly experience.</p>
            <p className="paragraph-elem"><span>· Iconography with Meaning:</span> If certain icons were confusing, we'd consider replacing them with more universally understood symbols or adding tooltips with explanations when hovering over the icons.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">4 · Iterative Testing & Refinement:</p>
            <p className="paragraph-elem">We wouldn't stop at just one round of testing.  The revised components would be presented to a new group of users for further feedback. This iterative process ensures the Spanish Design System is continuously refined to meet the evolving needs of Spanish citizens.</p>
          </div>

          <div id="ConclusionNextSteps" className="element-block">
            <h2 className="title-elem">Conclusion and next steps</h2>

            <p className="paragraph-elem">By analyzing successful Design Systems from other countries, we identified valuable components and best practices that could be adapted to the Spanish context.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Here are the key takeaways</p>
            <p className="paragraph-elem"><span>User-Centered Design:</span> Prioritizing user research and iterative design would ensure the Spanish Design System addresses the specific needs and frustrations of Spanish citizens.</p>
            <p className="paragraph-elem"><span>Accessibility and Mobile-First:</span> The system should prioritize accessibility best practices and ensure a responsive and user-friendly experience across all devices.</p>
            <p className="paragraph-elem"><span>Clarity and Consistency:</span>  Clear and concise communication in Spanish, combined with consistent UI components, would create a seamless user experience.</p>
          </div>

          <div className="element-block">
            <p className="paragraph-elem">Implementing a Spanish Design System offers significant potential benefits. Increased user satisfaction, improved accessibility, and streamlined development processes would lead to cost savings and a more efficient government.  Ultimately, a unified Design System empowers Spanish citizens to navigate government services with ease and fosters trust in the government's commitment to user experience.</p>
            <p className="paragraph-elem">While this project explored the potential of a Spanish Design System, further development and implementation require a more concrete plan. Here's a roadmap for the next steps:</p>
          </div>

          <img className="horizontal-image" src={conclusion1} alt={"conclusion-1"} />

          <div className="element-block">
            <p className="p-elem-contrast">1 · Stakeholder Buy-in</p>
            <p className="paragraph-elem">Secure the support of key stakeholders within the Spanish government, highlighting the potential benefits of a Design System (improved user experience, cost savings, efficiency).</p>
            <p className="paragraph-elem">Build a cross-functional team including designers, developers, user experience specialists, and government representatives to champion the project.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">2 · Comprehensive User Research</p>
            <p className="paragraph-elem">Conduct in-depth user research with real Spanish citizens who frequently interact with government websites. This could involve user interviews, usability testing, and surveys to gather detailed feedback on current pain points and user needs.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">3 · Design & Development</p>
            <p className="paragraph-elem">Based on user research findings, create a comprehensive Design System library with reusable UI components (buttons, forms, navigation elements) tailored to the Spanish context.</p>
            <p className="paragraph-elem">Develop clear and concise design guidelines outlining best practices for typography, color palettes, information architecture, and accessibility.</p>
            <p className="paragraph-elem">Establish a code library with reusable components and ensure compatibility with existing government web technologies.</p>
          </div>

          <img className="horizontal-image" src={conclusion2} alt={"conclusion-2"} />

          <div className="element-block">
            <p className="p-elem-contrast">4 · Testing & Iteration</p>
            <p className="paragraph-elem">Conduct usability testing with a new group of users to evaluate the effectiveness and user-friendliness of the Design System components.</p>
            <p className="paragraph-elem">Iterate on the design and code based on user feedback, ensuring a seamless and user-centered experience.</p>
          </div>
          
          <div className="element-block">
            <p className="p-elem-contrast">5 · Implementation & Training</p>
            <p className="paragraph-elem">Develop a rollout plan for the Design System, outlining how different government agencies will adopt and integrate it into their existing websites.</p>
            <p className="paragraph-elem">Provide training and workshops for government web developers and content creators on how to effectively utilize the Design System.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">6 · Maintenance & Evolution</p>
            <p className="paragraph-elem">Establish a governance model for the Design System, outlining roles and responsibilities for ongoing maintenance and updates.</p>
            <p className="paragraph-elem">Continuously gather feedback from users and stakeholders to identify areas for improvement and ensure the Design System remains relevant and effective.</p>
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