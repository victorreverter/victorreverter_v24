import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.avif'

import IntroBackground from './pics/IntroBackground.avif'
import IntroAudience from './pics/IntroAudience.avif'
import IntroSolution from './pics/IntroSolution.avif'

import DesignProcess from './pics/DesignProcess.avif'

import TheEnvironment from './pics/TheEnvironment.avif'
import TwoKeyProblem from './pics/TwoKeyProblems.avif'

import HealthBenefitOne from './pics/UserResearchOne.avif'
import HealthBenefitTwo from './pics/UserResearchTwo.avif'
import HealthBenefitThree from './pics/UserResearchThree.avif'
import HealthBenefitFour from './pics/UserResearchFour.avif'

import DefineImage from './pics/Define.avif'

import IdeationImage from './pics/Ideation.avif'

import Persona1 from './pics/UserPersonaOne.avif'
import Persona2 from './pics/UserPersonaTwo.avif'
import Persona3 from './pics/UserPersonaThree.avif'
import Persona4 from './pics/UserPersonaFour.avif'
import Persona5 from './pics/UserPersonaFive.avif'

import UserflowImage from './pics/Userflow.avif'

import BrandElements from './pics/BrandElements.avif'
import BrandCreation from './pics/BrandCreation.avif'
import BrandColor1 from './pics/BrandColorOne.avif'
import BrandColor2 from './pics/BrandColorTwo.avif'

import Wireframe1 from './pics/WireframeOne.avif'
import Wireframe2 from './pics/WireframeTwo.avif'
import Wireframe3 from './pics/WireframeThree.avif'
import Wireframe4 from './pics/WireframeFour.avif'
import Wireframe5 from './pics/WireframeFive.avif'
import Wireframe6 from './pics/WireframeSix.avif'
import Wireframe7 from './pics/WireframeSeven.avif'
import Wireframe8 from './pics/WireframeEight.avif'

import ReferencesVisual from './pics/References_Visual.avif'
import ReferenceOne from './pics/Reference_One.avif'
import ReferenceTwo from './pics/Reference_Two.avif'
import ReferenceThree from './pics/Reference_Three.avif'
import ReferenceFour from './pics/Reference_Four.avif'
import ReferenceFive from './pics/Reference_Five.avif'

import StyleGuideIntro from './pics/StyleGuideIntro.avif'

import StyleGuideOne from './pics/StyleGuideOne.avif'
import StyleGuideTwo from './pics/StyleGuideTwo.avif'

import UIKitIntro from './pics/UIKitIntro.avif'

import UIKitOne from './pics/UIKitOne.avif'
import UIKitTwo from './pics/UIKitTwo.avif'
import UIKitThree from './pics/UIKitThree.avif'

import MockupIntro from './pics/MockupIntro.avif'

import MockupOne from './pics/Mockup_One.avif'
import MockupTwo from './pics/Mockup_Two.avif'
import MockupThree from './pics/Mockup_Three.avif'
import MockupFour from './pics/Mockup_Four.avif'
import MockupFive from './pics/Mockup_Five.avif'
import MockupSix from './pics/Mockup_Six.avif'
import MockupSeven from './pics/Mockup_Seven.avif'
import MockupEigth from './pics/Mockup_Eigth.avif'

import DarkModeOne from './pics/DarkMode_One.avif'
import DarkModeTwo from './pics/DarkMode_Two.avif'
import DarkModeThree from './pics/DarkMode_Three.avif'

import PrototypeOne from './pics/Prototype_1.gif'
import PrototypeTwo from './pics/Prototype_2.gif'
import PrototypeThree from './pics/Prototype_3.gif'
import PrototypeFour from './pics/Prototype_4.gif'
import PrototypeFive from './pics/Prototype_5.gif'
import PrototypeSix from './pics/Prototype_6.gif'

import DesignPrinciplesOne from './pics/DesignPrinciplesOne.avif'
import DesignPrinciplesTwo from './pics/DesignPrinciplesTwo.avif'
import DesignPrinciplesThree from './pics/DesignPrinciplesThree.avif'

import KeyFeaturesOne from './pics/KeyFeaturesOne.avif'
import KeyFeaturesTwo from './pics/KeyFeaturesTwo.avif'
import KeyFeaturesThree from './pics/KeyFeaturesThree.avif'

//====================================================

import ProjectScreen from './pics/Project_Screen.jpg'

import Carousel from '../../components/Carousel';

const Project_1 = () => {

  const carouselItemsI = [
    { image: Persona1, alt: 'persona-1' },
    { image: Persona2, alt: 'persona-2' },
    { image: Persona3, alt: 'persona-3' },
    { image: Persona4, alt: 'persona-4' },
    { image: Persona5, alt: 'persona-5' },
    // Add more items as needed
  ];

  const carouselItemsII = [
    { image: ReferenceOne, alt: 'reference-1' },
    { image: ReferenceTwo, alt: 'reference-2' },
    { image: ReferenceThree, alt: 'reference-3' },
    { image: ReferenceFour, alt: 'reference-4' },
    { image: ReferenceFive, alt: 'reference-5' }
    // Add more items as needed
  ];

  const carouselItemsIII = [
    { image: DarkModeOne, alt: 'dark-mode-1' },
    { image: DarkModeTwo, alt: 'dark-mode-2' },
    { image: DarkModeThree, alt: 'dark-mode-3' }
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
        <div className={getElementClass('processID')} onClick={() => scrollToElement('processID')} data-target="processID">
          Process
        </div>
        <div className={getElementClass('empathyID')} onClick={() => scrollToElement('empathyID')} data-target="empathyID">
          Empathy
        </div>
        <div className={getElementClass('defineID')} onClick={() => scrollToElement('defineID')} data-target="defineID">
          Define
        </div>
        <div className={getElementClass('ideateID')} onClick={() => scrollToElement('ideateID')} data-target="ideateID">
          Ideate
        </div>
        <div className={getElementClass('prototypeID')} onClick={() => scrollToElement('prototypeID')} data-target="prototypeID">
          Prototype
        </div>
        <div className={getElementClass('designPrinciples')} onClick={() => scrollToElement('designPrinciples')} data-target="designPrinciples">
          Design Principles
        </div>
        <div className={getElementClass('keyFeatures')} onClick={() => scrollToElement('keyFeatures')} data-target="keyFeatures">
          Key features
        </div>
        <div className={getElementClass('summaryID')} onClick={() => scrollToElement('summaryID')} data-target="summaryID">
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

          <div className="element-block">
            <p className="title-elem">Preventing Diabetes</p>

            <p className="paragraph-elem">The increase in diabetes is a major public health challenge in Europe. It is estimated that diabetes costs the EU economy a ton of millions per year.</p>

            <p className="paragraph-elem">There are a number of things that can be done to address this challenge, including:</p>

            <p className="subtitle-elem">Preventing obesity and overweight</p>
            <p className="paragraph-elem">This is the most important way to prevent type 2 diabetes. This can be done by promoting healthy eating and physical activity.</p>

            <p className="subtitle-elem">Early diagnosis and treatment</p>
            <p className="paragraph-elem">Early diagnosis and treatment of diabetes can help to prevent complications, such as heart disease, stroke, and blindness.</p>

            <p className="subtitle-elem">Improving access to care</p>
            <p className="paragraph-elem">People with diabetes need to have access to high-quality care, including medications, education, and support. Depending the country and system in Europe sometimes this could be very challenging.</p>
          </div>

          <div className="element-block">
            <p className="title-elem">Preventing Diabetes</p>

            <p className="paragraph-elem">The immune system needs certain nutrients to function properly. Some of the most important nutrients for the immune system are as follows.</p>

            <p className="paragraph-elem">Related with this nutrients fruits are veggies are the only groups that cover at different levels those nutrients even proteins with multiple food products. Considering this see this key points</p>

            <p className="paragraph-elem"><span>1.</span> Protein is essential for the production of antibodies and other immune cells.</p>
            <p className="paragraph-elem"><span>2.</span> Vitamin A is important for the development of white blood cells.</p>
            <p className="paragraph-elem"><span>3.</span> Vitamin C is an antioxidant that helps to protect the immune system from damage.</p>
            <p className="paragraph-elem"><span>4.</span> Vitamin D is important for the production of immune cells.</p>
            <p className="paragraph-elem"><span>5.</span> Zinc is important for the function of many immune cells.</p>
            <p className="paragraph-elem"><span>6.</span> Iron is important for the production of red blood cells, which carry oxygen to the immune cells.</p>
          </div>

          <div className="element-block">
            <p className="subtitle-elem">Final insights about Health research</p>

            <p className="p-elem-contrast">Insight 1</p>
          
            <p className="paragraph-elem">Because of all of this researched here, the future for individuals who do not eat properly show illness like cancer, cardiac issues and more as something very likely. Because there is a strong link between diet and chronic diseases such as cancer, cardiovascular disease, and type 2 diabetes. A poor diet can increase your risk of developing these diseases in a number of ways.</p>

            <p className="p-elem-contrast">Insight 2</p>
          
            <p className="paragraph-elem">In addition, a diet high in saturated and trans fats can increase your risk of heart disease. These fats can raise your blood cholesterol levels, which can contribute to the buildup of plaque in your arteries. Finally, a diet high in sodium can increase your risk of high blood pressure. High blood pressure is a major risk factor for heart disease, stroke, and kidney disease. The link between diet and chronic diseases has been studied for many years. A number of large studies have shown that people who eat a healthy diet are less likely to develop these diseases.</p>
          </div>

          <div className="element-block">
            <p className="title-elem">Economy key points</p>

            <p className="paragraph-elem">Meanwhile in the economical point we face benefits of the consumption of seasoned fruits and veggies, in close relation between economy and health.</p>
          </div>

          <img className="vertical-image" src={HealthBenefitOne} alt={"health-benefit-one"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Benefit one</p>

            <p className="paragraph-elem">Seasoned fruits and vegetables are often more affordable than processed foods. Processed foods are often high in sugar, unhealthy fats, and sodium, and they can be expensive. Seasoned fruits and vegetables, on the other hand, are naturally sweet and flavorful, and they are a more affordable way to get the nutrients you need.</p>
          </div>

          <img className="vertical-image" src={HealthBenefitTwo} alt={"health-benefit-two"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Benefit two</p>

            <p className="paragraph-elem">Seasoned fruits and vegetables can help you save money on healthcare costs. Eating a healthy diet can help you maintain a healthy weight, which can reduce your risk of developing chronic diseases such as heart disease, stroke, and type 2 diabetes. These diseases can be expensive to treat, so eating a healthy diet can help you save money on healthcare costs in the long run.</p>
          </div>

          <img className="vertical-image" src={HealthBenefitThree} alt={"health-benefit-three"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Benefit three</p>

            <p className="paragraph-elem">Seasoned fruits and vegetables can help you support local farmers. When you buy seasoned fruits and vegetables that are grown locally, you are supporting your local economy. Local farmers are often more sustainable than large-scale farmers, and they may use fewer pesticides and herbicides.</p>
          </div>

          <img className="vertical-image" src={HealthBenefitFour} alt={"health-benefit-four"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Benefit four</p>

            <p className="paragraph-elem">Seasoned fruits and vegetables can help you reduce food waste. When you season fruits and vegetables, you are more likely to eat them. This can help you reduce food waste, which is a major problem in the world today.</p>
          </div>

          <div className="element-block">
            <p className="title-elem">Summary</p>

            <p className="subtitle-elem">Point 1</p>
            <p className="paragraph-elem">From a health perspective, the modern world faces a multitude of health challenges, including diabetes, obesity, weakened immune systems, and high blood pressure, which can lead to serious illnesses like cancer and cardiovascular problems. These issues are closely linked to lifestyle factors, such as diet and physical activity. Encouraging healthier eating habits, particularly by making knowledge about nutrition more accessible to as many people as possible, is crucial to address these health concerns.</p>

            <p className="subtitle-elem">Point 2</p>
            <p className="paragraph-elem">The prevalence of diabetes in Europe, for example, has significantly increased over the years due to factors such as obesity, physical inactivity, an aging population, and unhealthy diets. This increase poses a substantial economic burden on society, making preventive measures, early diagnosis, and improved access to care essential strategies to combat this public health challenge.</p>

            <p className="subtitle-elem">Point 3</p>
            <p className="paragraph-elem">The immune system, vital for overall health, is heavily influenced by diet. Fruits and vegetables play a pivotal role in boosting the immune system because they provide essential nutrients like protein, vitamins A, C, and D, zinc, and iron. A diet rich in processed foods, sugary drinks, and unhealthy fats can weaken the immune system, making it less effective in defending against diseases. Encouraging the consumption of fruits and vegetables is a crucial step in promoting better immune health and overall well-being.</p>

            <p className="subtitle-elem">Point 4</p>
            <p className="paragraph-elem">Furthermore, there is a strong connection between dietary habits and chronic diseases such as cancer, cardiovascular disease, and type 2 diabetes. Poor dietary choices, including diets high in saturated and trans fats and excessive sodium intake, increase the risk of these diseases. Conversely, adopting a healthier diet can reduce the likelihood of developing these chronic conditions.</p>

            <p className="subtitle-elem">Point 5</p>
            <p className="paragraph-elem">They are often more affordable than processed foods, which can be high in unhealthy ingredients and costly. Maintaining a healthy diet, including an emphasis on seasoned fruits and vegetables, can help individuals save money on healthcare expenses in the long run by reducing the risk of chronic diseases and their associated treatments.</p>

            <p className="subtitle-elem">Point 6</p>
            <p className="paragraph-elem">Supporting local farmers by purchasing seasoned fruits and vegetables grown locally not only boost the local economy but also encourages sustainable agricultural practices with potentially fewer pesticides and herbicides. This supports environmental sustainability, aligning economic choices with ecological well-being.</p>

            <p className="subtitle-elem">Point 7</p>
            <p className="paragraph-elem">Additionally, seasoned fruits and vegetables can contribute to reducing food waste. When people find these foods flavorful and enjoyable, they are more likely to consume them, decreasing the overall amount of food that goes to waste, which is a significant global issue.</p>

            <p className="subtitle-elem">Point 8</p>
            <p className="paragraph-elem">In conclusion, this research highlights the vital role of seasoned fruits and vegetables in promoting both health and economic well-being. Encouraging their consumption can lead to a healthier population, reduced healthcare costs, support for local economies, and a more sustainable approach to food consumption, benefiting individuals and communities alike.</p>
          </div>

          <div id="defineID" className="element-block">
            <p className="title-elem">2.2 Definition scenario</p>

            <p className="paragraph-elem">With the research insights, the needs of EUFIC, and the goals defined at the beginning of this process, the most suitable solution for this scenario is a mobile app. This app aims to provide as many people as possible with greater access to the "seasoned information".</p>
          </div>
          
          <img className="vertical-image" src={DefineImage} alt={"define-image"} />

          <div className="element-compact-block">
            <p className="p-elem-contrast">Why an app?</p>

            <p className="paragraph-elem">As the stats in gs.statcounter.com shown at September 23, the devices percentage are the next: <span>53.03%</span> - mobile, <span>45.13%</span> - desktop and <span>1.84%</span> - tablet.</p>
            <p className="paragraph-elem">Considering that EUFIC already has a web search feature to access information, the goal was to expand this access in a more user-friendly way, and an app could be the beginning of this process. In doing so, we aim to reach a wider range of potential users of EUFIC’s information.</p>
          </div>

          <div id="ideateID" className="element-block">
            <p className="title-elem">2.3 Ideation phase</p>

            <p className="paragraph-elem">With the problem identified, and the research and definition phases completed, we now progress to the ideation phase. This is a phase where we must properly address the requirements of this new app and strive to deliver it in the best possible way.</p>
          </div>

          <div className="element-compact-block">
            <p className="p-elem-contrast">User Personas</p>

            <p className="paragraph-elem">As the first step of our Ideation process, dealing with the potential users who are our target audience is crucial.</p>

            <p className="paragraph-elem">Creating User Personas allows us to stay on track with the following principles:</p>
            <p className="paragraph-elem">· Better Understanding of the Audience</p>
            <p className="paragraph-elem">· User-Centered Design</p>
            <p className="paragraph-elem">· Better Product Decisions</p>
          </div>

          <img className="vertical-image" src={IdeationImage} alt={"ideation-image"} />

          <Carousel items={carouselItemsI} />

          <div className="element-block">
            <p className="title-elem">Userflow</p>

            <p className="paragraph-elem">Using the information from research and the Personas created, here we see the userflow of the app for a better understanding of what must be placed in the app, and to define the user flow in the most adequate way.</p>
          </div>

          <img className="horizontal-image" src={UserflowImage} alt={"userflow-image"} />

          <div className="element-block">
            <p className="title-elem">Brand</p>

            <p className="paragraph-elem">Although EUFIC has its own logo, this new product was ideated under the idea of creating a new brand.</p>
          </div>

          <img className="horizontal-image" src={BrandElements} alt={"brand-elements"} />

          <div className="element-block">
            <p className="p-elem-contrast">Creation</p>

            <p className="paragraph-elem">The brand has been conceived using EUFIC fruit shape as reference, but in a completely filled shape.</p>

            <p className="paragraph-elem">Also added the “FOT” words. Food on time is nothing else than a way to refers to the food that fit with a time or in this project context “season”.</p>
          </div>

          <img className="horizontal-image" src={BrandCreation} alt={"brand-creation"} />

          <img className="vertical-image" src={BrandColor1} alt={"color-variation-1"} />
          <img className="vertical-image" src={BrandColor2} alt={"color-variation-2"} />

          <div className="element-block">
            <p className="title-elem">Wireframes</p>

            <p className="paragraph-elem">Using the userflow as a reference, we set the base for working on the low-definition interfaces. The main idea was to test interfaces, create flows, and more.</p>
          </div>

          <div className="element-block">
            <p className="subtitle-elem">Login with email validation</p>

            <p className="paragraph-elem">The login process to going home</p>
          </div>

          <img className="horizontal-image" src={Wireframe1} alt={"wireframe-1"} />

          <div className="element-block">
            <p className="subtitle-elem">Login with an app account validation</p>

            <p className="paragraph-elem">The login process to going Home</p>
          </div>

          <img className="horizontal-image" src={Wireframe2} alt={"wireframe-2"} />

          <div className="element-block">
            <p className="subtitle-elem">Sign Up</p>

            <p className="paragraph-elem">The sign up process to going Home</p>
          </div>

          <img className="horizontal-image" src={Wireframe3} alt={"wireframe-3"} />

          <div className="element-block">
            <p className="subtitle-elem">Searcher I</p>

            <p className="paragraph-elem">The Search Process to find fruits and veggies</p>
          </div>

          <img className="horizontal-image" src={Wireframe4} alt={"wireframe-4"} />

          <div className="element-block">
            <p className="subtitle-elem">Searcher II</p>

            <p className="paragraph-elem">The Search Process to find fruits and veggies</p>
          </div>

          <img className="horizontal-image" src={Wireframe5} alt={"wireframe-5"} />

          <div className="element-block">
            <p className="subtitle-elem">Recipes by product</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables</p>
          </div>

          <img className="horizontal-image" src={Wireframe6} alt={"wireframe-6"} />

          <div className="element-block">
            <p className="subtitle-elem">Recipes by product selected</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables that the user select or type</p>
          </div>

          <img className="horizontal-image" src={Wireframe7} alt={"wireframe-7"} />

          <div className="element-block">
            <p className="subtitle-elem">Supermarket by Product</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables</p>
          </div>

          <img className="horizontal-image" src={Wireframe8} alt={"wireframe-8"} />

          <div className="element-compact-block">
            <p className="title-elem">References</p>

            <p className="paragraph-elem">Once the wireframes are defined, we look out for references that help us to create the style guide, the ui kit and the high definition interfaces.</p>
          </div>

          <img className="vertical-image" src={ReferencesVisual} alt={"references-visual"} />

          <Carousel items={carouselItemsII} />

          <div className="element-compact-block">
            <p className="title-elem">Style guide</p>

            <p className="paragraph-elem">Once the brand is defined and the structure with the wireframes, style guide set the base for the UI kit and the high definition interfaces.</p>
          </div>

          <img className="vertical-image" src={StyleGuideIntro} alt={"style-guide-intro"} />

          <img className="horizontal-image" src={StyleGuideOne} alt={"style-guide-one"} />
          <img className="horizontal-image" src={StyleGuideTwo} alt={"style-guide-two"} />

          <div className="element-compact-block">
            <p className="title-elem">UI kit</p>

            <p className="paragraph-elem">UI kit is the component base to have the necessary tools to create interfaces under FOT brand.</p>
          </div>

          <img className="vertical-image" src={UIKitIntro} alt={"ui-kit-intro"} />

          <img className="horizontal-image" src={UIKitOne} alt={"ui-kit-one"} />
          <img className="horizontal-image" src={UIKitTwo} alt={"ui-kit-two"} />
          <img className="horizontal-image" src={UIKitThree} alt={"ui-kit-three"} />

          <div className="element-compact-block">
            <p className="title-elem">Mockups</p>

            <p className="paragraph-elem">Usign the UI kit the wireframes are now converted in high definition mockups.</p>
          </div>

          <img className="vertical-image" src={MockupIntro} alt={"mockup-intro"} />

          <div className="element-block">
            <p className="subtitle-elem">Login with email validation</p>

            <p className="paragraph-elem">The login process to going Home</p>
          </div>

          <img className="horizontal-image" src={MockupOne} alt={"mockup-one"} />

          <div className="element-block">
            <p className="subtitle-elem">Login with an app account validation</p>

            <p className="paragraph-elem">The login process to going Home</p>
          </div>

          <img className="horizontal-image" src={MockupTwo} alt={"mockup-two"} />

          <div className="element-block">
            <p className="subtitle-elem">Sign Up</p>

            <p className="paragraph-elem">The sign up process to going Home</p>
          </div>

          <img className="horizontal-image" src={MockupThree} alt={"mockup-three"} />

          <div className="element-block">
            <p className="subtitle-elem">Searcher I</p>

            <p className="paragraph-elem">The Search Process to find fruits and veggies</p>
          </div>

          <img className="horizontal-image" src={MockupFour} alt={"mockup-four"} />

          <div className="element-block">
            <p className="subtitle-elem">Searcher II</p>

            <p className="paragraph-elem">The Search Process to find fruits and veggies</p>
          </div>

          <img className="horizontal-image" src={MockupFive} alt={"mockup-five"} />

          <div className="element-block">
            <p className="subtitle-elem">Recipes by product</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables</p>
          </div>

          <img className="horizontal-image" src={MockupSix} alt={"mockup-six"} />

          <div className="element-block">
            <p className="subtitle-elem">Recipes by product selected</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables that the user select or type</p>
          </div>

          <img className="horizontal-image" src={MockupSeven} alt={"mockup-seven"} />

          <div className="element-block">
            <p className="subtitle-elem">Supermarket by Product</p>

            <p className="paragraph-elem">The Search Process to find recipes of fruits and vegetables</p>
          </div>

          <img className="horizontal-image" src={MockupEigth} alt={"mockup-eight"} />

          <div className="element-block">
            <p className="title-elem">A dark mode to contrast</p>

            <p className="paragraph-elem">In contrast with the light version here we see some of the dark mode screens and UI changes.</p>
          </div>

          <Carousel items={carouselItemsIII} />

          <div id="prototypeID" className="element-block">
            <p className="title-elem">2.4 Prototyping phase</p>

            <p className="paragraph-elem">With the style guide, UI kit, and mockups defined, the moment for prototyping has arrived. This phase allows us to see the product in an early production phase live and identify the changes that must be made, if required.</p>

            <p className="paragraph-elem">The login or sign up flows of the app are shown here.</p>
          </div>

          <img className="tercial-image" src={PrototypeOne} alt={"prototype-one"} />
          <img className="tercial-image" src={PrototypeTwo} alt={"prototype-two"} />
          <img className="tercial-image" src={PrototypeThree} alt={"prototype-three"} />

          <div className="element-block">
            <p className="paragraph-elem">The search, recipes and market flows of the app are shown here.</p>
          </div>

          <img className="tercial-image" src={PrototypeFour} alt={"prototype-four"} />
          <img className="tercial-image" src={PrototypeFive} alt={"prototype-five"} />
          <img className="tercial-image" src={PrototypeSix} alt={"prototype-six"} />

          <div id="designPrinciples" className="element-block">
            <p className="title-elem">Design Principles</p>

            <p className="paragraph-elem">In the following screens, we will showcase the design principles that have been followed in this process.</p>
          </div>

          <div className="element-compact-block">
            <p className="subtitle-elem">Simplicity and Clarity</p>

            <p className="paragraph-elem">Strive for a clean and uncluttered interface that prioritizes ease of use. Avoid overwhelming users with too many options or complex navigation structures.</p>
          </div>

          <img className="vertical-image" src={DesignPrinciplesOne} alt={"design-principles-one"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">User-Friendly Search Function</p>

            <p className="paragraph-elem">Implement a robust search function that allows users to filter and refine their searches based on various criteria, such as season, type of fruit or vegetable, cuisine, and dietary restrictions.</p>
          </div>

          <img className="vertical-image" src={DesignPrinciplesTwo} alt={"design-principles-two"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Visual Appeal and Relevance</p>

            <p className="paragraph-elem">The app's visual design should be appealing and consistent with the brand identity. Use high-quality images, typography, and color palettes to create a visually engaging experience. Ensure that the visual elements are relevant to the app's purpose and content.</p>
          </div>

          <img className="vertical-image" src={DesignPrinciplesThree} alt={"design-principles-three"} />

          <div id="keyFeatures" className="element-block">
            <p className="title-elem">Key features</p>

            <p className="paragraph-elem">In the following screens, we will showcase the key features of the app and how they address to the target audience.</p>
          </div>

          <img className="vertical-image" src={KeyFeaturesOne} alt={"key-features-one"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Search</p>

            <p className="paragraph-elem">Understanding the needs of the users and the base product that EUFIC already has, it becomes clear that a search is the key element around which everything revolves.</p>
          </div>

          <img className="vertical-image" src={KeyFeaturesTwo} alt={"key-features-two"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Recipes</p>

            <p className="paragraph-elem">In an effort to create a more usable and profitable product, a new recipe section has been added. The goal is to eventually enrich it with more recipes.</p>
          </div>

          <img className="vertical-image" src={KeyFeaturesThree} alt={"key-features-three"} />

          <div className="element-compact-block">
            <p className="subtitle-elem">Market</p>

            <p className="paragraph-elem">Just like in the recipes area, adding markets where users can obtain their seasonal products is very relevant. However, this is a section in the app that has more room for further development.</p>
          </div>

          <div id="summaryID" className="element-block">
            <p className="title-elem">Summary</p>

            <p className="paragraph-elem">To summarize now we can see the key points of the study, the lessons learned and next possible steps with Food on Time (FOT).</p>
          </div>

          <div className="element-block">
            <p className="subtitle-elem">Key points of the study</p>

            <p className="p-elem-contrast">Health and Economic problems that seasoned fruits could aliviate</p>
            <p className="paragraph-elem">As we see in the research process, health and economic issues can be significantly alleviated with seasonal fruits and vegetables, due to their proximity and fresh nutrients, among other benefits.</p>

            <p className="p-elem-contrast">Why an Eufic app amplify the audience and the use of the information</p>
            <p className="paragraph-elem">FOT app is a way to help Eufic organization to reach more audience and provide the information for the sake of europeans for now.</p>

            <p className="p-elem-contrast">The App is connected with supermarkets</p>
            <p className="paragraph-elem">To provide more than just search and recipes, we have added the option to connect with supermarkets. Here, you’ll be able to purchase some of the seasonal fruits and vegetables, depending on the country.</p>
          </div>

          <div className="element-block">
            <p className="title-elem">Lessons learned</p>

            <p className="paragraph-elem">Lessons learned that will serve to improve or iterate the product in the future or will help me to improve in the analysis and execution of future product designs.</p>
          </div>

          <div className="element-block">
            <p className="p-elem-contrast">Needs of save recipes</p>
            <p className="paragraph-elem">After create the whole app, we realized that users sometimes want to save their favorite recipes, so this could be an extra to have in consideration for the future.</p>

            <p className="p-elem-contrast">Supermarket options can be scaled up</p>
            <p className="paragraph-elem">At the moment we connect the app with markets filtered by countries, we understand the vast possibilities this option could offer in a future scaling process. Options like selecting multiple products in the FOT app and proceeding to the market app to purchase this curated list.</p>

            <p className="p-elem-contrast">Make it simple to the user</p>
            <p className="paragraph-elem">Specifically in this product, the easy language and consistency through the whole app is crucial to not overwhelm the user.</p>
          </div>

          <div className="element-block">
            <p className="title-elem">Next possible steps for FOT product</p>

            <p className="p-elem-contrast">Redesign the website</p>
            <p className="paragraph-elem">Once we have a published app design, one of the future steps is to provide an update to the official Eufic website.</p>

            <p className="p-elem-contrast">Create a web browser app version</p>
            <p className="paragraph-elem">Although the app is the primary accessible way for users to use this product, another method to reach a wider audience is to create a browser version of the new FOT app.</p>

            <p className="p-elem-contrast">Extend the product to other areas or continents</p>
            <p className="paragraph-elem">Due to the demand for a product like this, expanding its application to other areas would not only be interesting but also, at some point, necessary.</p>
          </div>

          <div className="divider-elem"></div>

          <div className="element-block">
            <p className="paragraph-elem">Thank you for reading through! Hope you enjoyed learning about my design and thought process.</p>
          </div>

          {/* <div className="element-block">
            <p className="title-elem">Immune system needs</p>

            <p className="paragraph-elem">X</p>
          </div> */}

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