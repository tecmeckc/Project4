// src/hooks/useAqiData.jsx
import { useState, useEffect } from "react";
import aqiService from "../services/aqiService";

function useAqiData() {
  const [aqi, setAqi] = useState(null);
  const [worstAreas, setWorstAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching AQI Data from Hook...");
        
        const delhiData = await aqiService.getDelhiAqi();
        if (delhiData) {
          console.log("Delhi AQI Data:", delhiData);
          setAqi(delhiData.aqi);
        } else {
          console.error("Failed to get Delhi AQI data");
        }

        const worstData = await aqiService.getWorstAqiAreas();
        if (worstData.length > 0) {
          console.log("Worst AQI Areas Data:", worstData);
          setWorstAreas(worstData);
        } else {
          console.error("Failed to get Worst AQI Areas data");
        }
      } catch (error) {
        console.error("Failed to fetch AQI data", error);
      }
    };

    fetchData();
  }, []);

  return { aqi, worstAreas };
}

export default useAqiData;
