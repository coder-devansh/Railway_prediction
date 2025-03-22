import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Thor.io</h2>
      <p>
        Thor.io is a smart rainwater harvesting platform that allows users to 
        collect, track, and manage rainwater efficiently. Our mission is to 
        promote water conservation and reward users for their contributions.
      </p>
      <h3>Why Choose Thor.io?</h3>
      <ul>
        <li>🌍 Helps conserve water</li>
        <li>💧 Real-time rain alerts</li>
        <li>🎁 Earn credits for collecting water</li>
      </ul>
    </div>
  );
};

export default About;
