import React, { useState } from 'react';
import './collectRainWater.css';

const CollectWater = () => {
  const [waterCollected, setWaterCollected] = useState(0);
  const [creditsEarned, setCreditsEarned] = useState(0);

  const collectWater = () => {
    setWaterCollected(prev => prev + 10); // Increase by 10L
    setCreditsEarned(prev => prev + 5);   // Earn 5 credits
  };

  return (
    <div className="collect-water-container">
      <h2>Track Your Water Collection & Earn Rewards</h2>

      <div className="metrics">
        <span>🌊 Water Collected: <strong>{waterCollected} Liters</strong></span>
        <span>🏅 Credits Earned: <strong>{creditsEarned}</strong></span>
      </div>

      <button className="collect-btn" onClick={collectWater}>
        💧 Collect Water
      </button>

      <div className="achievements">
        <h3>🏆 Your Achievements</h3>
        <ul>
          <li>🥇 Collect 50L for your first award!</li>
          <li>🎖️ Earn 100 credits for this achievement!</li>
        </ul>
      </div>
    </div>
  );
};

export default CollectWater;
