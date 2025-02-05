// src/services/aqiService.jsx
import axios from "axios";

const API_URL = "https://api.waqi.info/feed/";
const API_TOKEN = import.meta.env.VITE_WAQI_API_KEY; // ✅ Ensured API key is loaded

console.log("API Token in aqiService:", API_TOKEN); // ✅ Debugging log

if (!API_TOKEN) {
  console.error("Missing API key! Make sure VITE_WAQI_API_KEY is set in your .env file.");
}

const aqiService = {
  getDelhiAqi: async () => {
    try {
      console.log("Fetching AQI data...");
      const response = await axios.get(`${API_URL}delhi/`, {
        params: { token: API_TOKEN },
      });

      console.log("Delhi AQI API Response:", response.data); // ✅ Debug response

      if (response.data.status !== "ok") {
        console.error("API returned an error:", response.data);
        return null;
      }
      return response.data.data; // ✅ Ensure correct data extraction
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      return null;
    }
  },

  getWorstAqiAreas: async () => {
    try {
      console.log("Fetching worst AQI areas...");
      const response = await axios.get("https://api.waqi.info/map/bounds/", {
        params: {
          token: API_TOKEN,
          latlng: "28.40,76.85,28.90,77.40",
        },
      });
  
      console.log("Worst AQI Areas Response:", response.data);
  
      if (response.data.status !== "ok") {
        console.error("Error in worst AQI API response:", response.data);
        return [];
      }
  
      return response.data.data
        .map(area => ({
          name: area.station?.name || "Unknown Location", // ✅ Extracts the name
          aqi: area.aqi
        }))
        .sort((a, b) => b.aqi - a.aqi)
        .slice(0, 5);
    } catch (error) {
      console.error("Error fetching worst AQI areas:", error);
      return [];
    }
  },
  
};

export default aqiService;
