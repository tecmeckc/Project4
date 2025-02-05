// src/components/Map/Map.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const MapComponent = () => {
  const position = [28.6139, 77.209]; // Coordinates for Delhi

  return (
    <MapContainer center={position} zoom={11} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
