import React from 'react';
// import './Home.css';
import '../styles/global.css';
import '../styles/hero-home.css';

const Home = () => {
  return (
    <section className="hero-home">
      <div className='gradient-over'></div>

      <p class="marquee">
        <span>VICTOR REVERTER VICTOR REVERTER&nbsp;</span>
      </p>
      
      <p class="marquee marquee2">
        <span>VICTOR REVERTER VICTOR REVERTER&nbsp;</span>
      </p>

      <div className="hero-home-content">
        <h1>Victor <span>Reverter</span></h1>
        <p>Creative and problem solving designer using my knowledge and passion to get things rightly done.</p>
        {/* Add more content or call-to-action as needed */}
      </div>
    </section>
  );
}

export default Home;