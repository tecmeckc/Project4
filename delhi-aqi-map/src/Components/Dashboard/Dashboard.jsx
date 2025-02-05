import React from 'react';
import MapComponent from '../Map/Map';

import useAqiData from '../../hooks/useAqiData';

const Dashboard = () => {
  const { aqi, worstAreas } = useAqiData();

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-5">
      <h1 className="text-3xl font-bold text-center text-blue-700">Air Pollution Index</h1>

      <div className="flex flex-col items-center mt-5">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center w-60">
          <h2 className="text-5xl font-bold text-blue-600">{aqi ?? "Loading..."}</h2>
          <p className="text-gray-600">Air Quality Index</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Areas with Worst AQI</h3>
        <div className="mt-3 space-y-3">
          {worstAreas.map((area, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-xl text-white text-lg shadow-md ${
                area.aqi > 200 ? "bg-red-600" : 
                area.aqi > 100 ? "bg-yellow-500" : "bg-green-500"
              }`}
            >
              {area.name}: {area.aqi}
            </div>
          ))}
        </div>
      </div>

      {/* 📌 Delhi Map */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800">Delhi AQI Map</h2>
        <MapComponent />
      </div>
    </div>
  );
};

export default Dashboard;
