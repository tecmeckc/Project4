// src/components/Dashboard/Dashboard.js
import React from 'react';
import MapComponent from '../Map/Map';
import useAqiData from '../../hooks/useAqiData';
import './Dashboard.css';

const Dashboard = () => {
  const { aqi, worstAreas } = useAqiData();

  return (
    <div className="dashboard">
      <h2>Current AQI: {aqi}</h2>
      <h3>Areas with Worst AQI:</h3>
      <ul>
        {worstAreas.map((area, index) => (
          <li key={index}>
            {area.name}: {area.aqi}
          </li>
        ))}
      </ul>
      <MapComponent />
    </div>
  );
};

export default Dashboard;
