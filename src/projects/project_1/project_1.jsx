import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/projects.css'

import Flickity from 'react-flickity-component'

//cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js

import coverImagePro from '../../assets/project_covers/project_1.jpg'

import potusPicOne from './pics/AbrahamLincoln.png'
import potusPicTwo from './pics/BarackO.png'
import potusPicThree from './pics/BillC.png'
import potusPicFour from './pics/DonaldT.png'
import potusPicFive from './pics/FranklinR.png'

const Project_1 = () => {

  const flickityOptions = {
    initialIndex: 0
  }

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

        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img className="gallery-cell" src={potusPicOne} alt="pic_one" />
          <img className="gallery-cell" src={potusPicTwo} alt="pic_two" />
          <img className="gallery-cell" src={potusPicThree} alt="pic_three" />
          <img className="gallery-cell" src={potusPicFour} alt="pic_four" />
          <img className="gallery-cell" src={potusPicFive} alt="pic_five" />
          
          {/* <div className="gallery-cell"></div>
          <div className="gallery-cell"></div>
          <div className="gallery-cell"></div>
          <div className="gallery-cell"></div>
          <div className="gallery-cell"></div> */}
        </Flickity>
      
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