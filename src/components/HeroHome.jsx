import React from 'react';
// import './Home.css';
import '../styles/global.css';
import '../styles/hero-home.css';

const Home = () => {
  return (
    <section className="hero-home">
      <div className='gradient-over'></div>

      <div className="hero-home-content">
        <h3>Victor Reverter</h3>
        <h1>Product Design</h1>
        <h1>& Web Developer</h1>
        {/* <p>Product Designer & Web Developer</p> */}
      </div>
    </section>
  );
}

export default Home;