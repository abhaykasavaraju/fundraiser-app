import React from 'react';
import '../App.css';  
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Alumni Events</h1>
      <p>Spells of reminiscence</p>
      <div className='hero-btns'>
        <button className="btn btn-primary">Get Started</button>
        <button className="btn btn-primary">Join Network</button>

      </div>
    </div>
  );
}

export default HeroSection;