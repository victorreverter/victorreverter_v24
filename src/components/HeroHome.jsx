import React from 'react';
// import './Home.css';
import '../styles/global.css';
import '../styles/hero-home.css';

const Home = () => {
  return (
    <section className="hero-home">
      <div className="hero-home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate Product Designer with a focus on creating meaningful and user-centric experiences.</p>
        {/* Add more content or call-to-action as needed */}
      </div>
    </section>
  );
}

export default Home;