// src/App.js
import React, { useState } from 'react';
import Weather from './components/Weather';
import LocationForm from './components/LocationForm';

const App = () => {
  const [location, setLocation] = useState('New York');

  const handleLocationSubmit = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <LocationForm onLocationSubmit={handleLocationSubmit} />
      <Weather location={location} />
    </div>
  );
};

export default App;
