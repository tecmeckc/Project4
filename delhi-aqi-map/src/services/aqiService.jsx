// src/services/aqiService.js
const API_URL = 'your_aqi_api_endpoint';

export const fetchAqiData = async (location) => {
  try {
    const response = await fetch(`${API_URL}?location=${location}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching AQI data:', error);
    return null;
  }
};
