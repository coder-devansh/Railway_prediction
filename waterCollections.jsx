import React, { useState } from 'react';
import './waterCollection.css';

const waterCollection = () => {
  const [collectedAmount, setCollectedAmount] = useState(0);

  const handleCollectWater = () => {
    setCollectedAmount(collectedAmount + 10);
  };

  return (
    <div className="water-collection-container">
      <h2>💧 Collect Water</h2>
      <p>Amount Collected: {collectedAmount} Liters</p>
      <button onClick={handleCollectWater}>Collect Water</button>
    </div>
  );
};

export default waterCollection;
