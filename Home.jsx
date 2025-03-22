import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Thoro.io</h1>
      <p>Your smart rainwater harvesting solution</p>

      <div className="features-container">
        <div className="feature-card">
          <h3>🌧️ Real-time Rain Alerts</h3>
          <p>Get instant notifications</p>
        </div>
        <div className="feature-card">
          <h3>🚰 Smart Water Collection</h3>
          <p>Monitor and manage your water</p>
        </div>
        <div className="feature-card">
          <h3>💰 Earn Rewards</h3>
          <p>Deposit water and earn discounts</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
