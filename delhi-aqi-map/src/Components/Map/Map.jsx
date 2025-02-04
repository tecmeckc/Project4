// src/components/Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const Map = () => {
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAqiData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=28.6139&lon=77.2090&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        setAqiData(response.data);
      } catch (err) {
        setError('Error fetching AQI data');
        console.error(err);
      }
    };

    fetchAqiData();
  }, []);

  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={11} style={{ height: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {aqiData && (
        <Marker position={[28.6139, 77.2090]}>
          <Popup>
            <h3>Delhi Air Quality Index (AQI)</h3>
            <p>AQI: {aqiData.list[0].main.aqi}</p>
            {/* Render additional AQI data as needed */}
          </Popup>
        </Marker>
      )}
      {error && <p>{error}</p>}
    </MapContainer>
  );
};

export default Map;
