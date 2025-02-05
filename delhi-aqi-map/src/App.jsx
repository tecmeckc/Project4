// src/App.js
import React from 'react';
import Header from './components/UI/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/UI/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
