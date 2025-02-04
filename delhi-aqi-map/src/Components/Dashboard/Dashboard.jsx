// src/components/Dashboard/Dashboard.js
import React from 'react';
import useAqiData from '../../hooks/useAqiData';
import './Dashboard.css';

const Dashboard = ({ location }) => {
  const aqiData = useAqiData(location);

  if (!aqiData) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>AQI for {location}</h2>
      <p>Current AQI: {aqiData.current}</p>
      {/* Additional charts and comparisons */}
    </div>
  );
};

export default Dashboard;
