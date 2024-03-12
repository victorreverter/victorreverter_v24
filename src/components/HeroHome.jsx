import React, { useEffect } from "react";
// import './Home.css';
import '../styles/global.css';
import '../styles/hero-home.css';

const Home = () => {
  useEffect(() => {
    // console.log('Home component mounted');
    
    const HeroName = document.querySelector('#HeroName');
    const HeroNameContent = document.querySelector('#HeroNameContent');
    
    setTimeout(() => {
      HeroName.classList.add('hero-home-activated');
    }, 50);

    setTimeout(() => {
      HeroNameContent.classList.add('hero-home-content-activated');
    }, 700);

  }, []);

  return (
    <section id="HeroName" className="hero-home">
      <div className='gradient-over'></div>

      <div id="HeroNameContent" className="hero-home-content">
        <h3>Victor Reverter</h3>

        <h1>Full Stack</h1>
        <h1>Designer</h1>

        {/* <p>Product Designer & Web Developer</p> */}
      </div>
    </section>
  );
}

export default Home;