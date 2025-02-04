// src/App.js
import React, { useState } from 'react';
import Map from './components/Map/Map';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="app">
      <Map onLocationSelect={handleLocationSelect} />
      {selectedLocation && <Dashboard location={selectedLocation} />}
    </div>
  );
};

export default App;
