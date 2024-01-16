// import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
// import HeroHome from './components/HeroHome';
// import SelectedProjects from './components/SelectedProjects';

import Footer from './components/Footer';


const App = () => {
  const [count, setCount] = useState(0)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      {/* <HeroHome />
      <SelectedProjects /> */}
      {/* Other components will go here */}
      <Footer />
    </div>
  );
}

export default App;