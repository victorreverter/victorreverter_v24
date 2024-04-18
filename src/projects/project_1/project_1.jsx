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

import HealthBenefitOne from './pics/2.1_User_Research_1.png'
import HealthBenefitTwo from './pics/2.1_User_Research_2.png'
import HealthBenefitThree from './pics/2.1_User_Research_3.png'
import HealthBenefitFour from './pics/2.1_User_Research_4.png'

import DefineImage from './pics/2.2_Define.png'

import IdeationImage from './pics/Ideation.png'

import Persona1 from './pics/User_Persona_1.jpg'
import Persona2 from './pics/User_Persona_2.jpg'
import Persona3 from './pics/User_Persona_3.jpg'
import Persona4 from './pics/User_Persona_4.jpg'
import Persona5 from './pics/User_Persona_5.jpg'

import UserflowImage from './pics/Userflow.png'

import BrandElements from './pics/Brand_Elements.png'
import BrandCreation from './pics/BrandCreation.png'
import BrandColor1 from './pics/Brand_Color_1.png'
import BrandColor2 from './pics/Brand_Color_2.png'

import Wireframe1 from './pics/Wireframe_1.png'
import Wireframe2 from './pics/Wireframe_2.png'
import Wireframe3 from './pics/Wireframe_3.png'
import Wireframe4 from './pics/Wireframe_4.png'
import Wireframe5 from './pics/Wireframe_5.png'
import Wireframe6 from './pics/Wireframe_6.png'
import Wireframe7 from './pics/Wireframe_7.png'
import Wireframe8 from './pics/Wireframe_8.png'

//====================================================

import AFASolution6 from './pics/Solution_VI.jpg'
import AFASolution7 from './pics/Solution_VII.jpg'
import AFASolution8 from './pics/Solution_VIII.jpg'

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
        {/* <div className={getElementClass('prototypeID')} onClick={() => scrollToElement('prototypeID')} data-target="prototypeID">
          Prototype
        </div> */}
        {/* <div className={getElementClass('designPrinciples')} onClick={() => scrollToElement('designPrinciples')} data-target="designPrinciples">
          Design Principles
        </div> */}
        {/* <div className={getElementClass('keyFeatures')} onClick={() => scrollToElement('keyFeatures')} data-target="keyFeatures">
          Key features
        </div> */}
        {/* <div className={getElementClass('summaryID')} onClick={() => scrollToElement('summaryID')} data-target="summaryID">
          Summary
        </div> */}
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
            <p className="title-elem">2.1 Definition scenario</p>

            <p className="paragraph-elem">With the research insights, the needs of EUFIC, and the goals defined at the beginning of this process, the most suitable solution for this scenario is a mobile app. This app aims to provide as many people as possible with greater access to the "seasoned information".</p>
          </div>
          
          <img className="vertical-image" src={DefineImage} alt={"define-image"} />

          <div className="element-compact-block">
            <p className="p-elem-contrast">Why an app?</p>

            <p className="paragraph-elem">As the stats in gs.statcounter.com shown at September 23, the devices percentage are the next: <span>53.03%</span> - mobile, <span>45.13%</span> - desktop and <span>1.84%</span> - tablet.</p>
            <p className="paragraph-elem">Considering that EUFIC already has a web search feature to access information, the goal was to expand this access in a more user-friendly way, and an app could be the beginning of this process. In doing so, we aim to reach a wider range of potential users of EUFIC’s information.</p>
          </div>

          <div id="ideateID" className="element-block">
            <p className="title-elem">2.2 Ideation phase</p>

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
            <p className="title-elem">Immune system needs</p>

            <p className="paragraph-elem">X</p>
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