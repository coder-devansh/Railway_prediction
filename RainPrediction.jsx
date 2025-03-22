// src/Components/RainPrediction.js
import React, { useState } from 'react';
import axios from 'axios';

const RainPrediction = () => {
    const [max, setMax] = useState('');
    const [min, setMin] = useState('');
    const [wind, setWind] = useState('');
    const [wind_d, setWindD] = useState('');
    const [humidi, setHumidi] = useState('');
    const [cloud, setCloud] = useState('');
    const [pressure, setPressure] = useState('');
    const [predictions, setPredictions] = useState(null); // Initialize predictions as null

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputData = [{ max, min, wind, wind_d, humidi, cloud, pressure }];
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', inputData);
            setPredictions(response.data.predictions); // Update predictions state
        } catch (error) {
            console.error('Error fetching predictions:', error);
        }
    };

    return (
        <div>
            <h1>Rain Prediction</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Max Temp" value={max} onChange={(e) => setMax(e.target.value)} required />
                <input type="number" placeholder="Min Temp" value={min} onChange={(e) => setMin(e.target.value)} required />
                <input type="number" placeholder="Wind Speed" value={wind} onChange={(e) => setWind(e.target.value)} required />
                <input type="text" placeholder="Wind Direction" value={wind_d} onChange={(e) => setWindD(e.target.value)} required />
                <input type="number" placeholder="Humidity" value={humidi} onChange={(e) => setHumidi(e.target.value)} required />
                <input type="number" placeholder="Cloud Cover" value={cloud} onChange={(e) => setCloud(e.target.value)} required />
                <input type="number" placeholder="Pressure" value={pressure} onChange={(e) => setPressure(e.target.value)} required />
                <button type="submit">Predict Rain</button>
            </form>
            {predictions && (
                <ul>
                    {predictions.map((prediction, index) => (
                        <li key={index}>Prediction: {prediction}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RainPrediction;