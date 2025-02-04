// src/hooks/useAqiData.js
import { useState, useEffect } from 'react';
import { fetchAqiData } from '../services/aqiService';

const useAqiData = (location) => {
  const [aqiData, setAqiData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAqiData(location);
      setAqiData(data);
    };
    getData();
  }, [location]);

  return aqiData;
};

export default useAqiData;
