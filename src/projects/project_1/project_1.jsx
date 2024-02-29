import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import coverImagePro from './pics/Cover.jpg'

import AFAPicOne from './pics/Solution_I.jpg'
import AFAPicTwo from './pics/Solution_II.jpg'
import AFAPicThree from './pics/Solution_III.jpg'
import AFAPicFour from './pics/Solution_IV.jpg'
import AFAPicFive from './pics/Solution_V.jpg'

import Carousel from '../../components/Carousel';

const Project_1 = () => {

  const carouselItems = [
    { image: AFAPicOne, alt: 'Image 1' },
    { image: AFAPicTwo, alt: 'Image 2' },
    { image: AFAPicThree, alt: 'Image 3' },
    { image: AFAPicFour, alt: 'Image 4' },
    { image: AFAPicFive, alt: 'Image 5' },
    // Add more items as needed
  ];

  return (
    <div className='project-container'>
      <div className='project-header'>
        <h2 className='title-project'>Project Title</h2>
        <h4 className='description-project'>A data showcase related with the Presidents of the United States. This is a tool and also an example of in this case historic data through the years.</h4>
        
        <div className="section-project">
          <h5>Date</h5>
          <p>2024</p>
        </div>

        <div className="section-project">
          <h5>Role</h5>
          <p>Product Designer & also the Brand elaborator</p>
        </div>

        <div className="section-project">
          <h5>Category</h5>
          <p>Branding · UX</p>
        </div>
      </div>

      <img className='cover-image-pro' src={coverImagePro} alt={"about-pic"} />

      <div className="project-main">

        <div className="paragraphs-container">
          <p className="regular-p">With a clean, responsive and adaptative design the data show the evolution through the history in the role of president. POTUS that is the acronym of President of the United States is the shorter way that I decided to define the title of this project.</p>
          <p className="regular-p">With a clean, responsive and adaptative design the data show the evolution through the history in the role of president. POTUS that is the acronym of President of the United States is the shorter way that I decided to define the title of this project.</p>
          <p className="single-p">With a clean, responsive and adaptative design the data show the evolution through the history in the role of president. POTUS that is the acronym of President of the United States is the shorter way that I decided to define the title of this project.</p>
        </div>

        <Carousel items={carouselItems} />
      
        <Link to={"https://victorreverter.github.io/potusdata/"} target='_blank' className='btn-item'>
          <div className="container-text">
            <span>View Live</span>
            {/* <span>Projects</span> */}
          </div>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>
      </div>

    </div>
  )
}

export default Project_1