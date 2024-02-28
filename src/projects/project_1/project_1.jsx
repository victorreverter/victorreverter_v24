import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

// import Flickity from 'react-flickity-component'
//cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js

import coverImagePro from '../../assets/project_covers/project_1.jpg'

import AFAPicOne from './pics/Solution I.jpg'
import AFAPicTwo from './pics/Solution II.jpg'
import AFAPicThree from './pics/Solution III.jpg'
import AFAPicFour from './pics/Solution IV.jpg'
import AFAPicFive from './pics/Solution V.jpg'

const Project_1 = () => {

  // const flickityOptions = {
  //   initialIndex: 0
  // }

  // useEffect(() => {
  //   initFlickity();
  // }, []);

  // const carousel = useRef(null);

  // async function initFlickity() {
  //   if (typeof window !== 'undefined' && carousel.current) {
  //     const Flickity = (await import('flickity')).default;
  //     new Flickity(carousel.current, {
  //       lazyLoad: true,
  //       wrapAround: true,
  //       autoPlay: true,
  //     });
  //   }
  // }

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
        <p>With a clean, responsive and adaptative design the data show the evolution through the history in the role of president. POTUS that is the acronym of President of the United States is the shorter way that I decided to define the title of this project.</p>

        {/* <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img className="gallery-cell" src={AFAPicOne} alt="pic_one" />
          <img className="gallery-cell" src={AFAPicTwo} alt="pic_two" />
          <img className="gallery-cell" src={AFAPicThree} alt="pic_three" />
          <img className="gallery-cell" src={AFAPicFour} alt="pic_four" />
          <img className="gallery-cell" src={AFAPicFive} alt="pic_five" />
        </Flickity> */}

        {/* <div ref={carousel} className="carousel">
          <div><img src={AFAPicOne} /></div>
          <div><img src={AFAPicTwo} /></div>
          <div><img src={AFAPicThree} /></div>
          <div><img src={AFAPicFour} /></div>
          <div><img src={AFAPicFive} /></div>
        </div> */}

        {/* <div className="slider-container">  
          <img className="slider-item" src={AFAPicOne} />
          <img className="slider-item" src={AFAPicTwo} />
          <img className="slider-item" src={AFAPicThree} />
          <img className="slider-item" src={AFAPicFour} />
        </div>   */}

        
      
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