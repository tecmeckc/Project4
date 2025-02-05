// src/components/UI/Footer.jsx
import React from "react";
import "./Footer.css"; // Ensure this file exists

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Delhi AQI Map. All rights reserved.</p>
    </footer>
  );
};

export default Footer; // Ensure default export is present
