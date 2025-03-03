import React, { useState, useContext } from 'react';



export default function CascadingDropdown() {
    const countryCityData = [ 
    { country: "USA", city: "New York" },
    { country: "USA", city: "Los Angeles" },
    { country: "USA", city: "Chicago" },
    { country: "Canada", city: "Toronto" },
    { country: "Canada", city: "Vancouver" },
    { country: "UK", city: "London" },
    { country: "UK", city: "Manchester" }];

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
  
    const [selectedCountry, setSelectedCountry] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);

    const uniqueCountries = Array.from(
        new Set(countryCityData.map(item => item.country))
      );

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setSelectedCity(""); // Reset city when country changes
        const cities = countryCityData.filter(item => item.country === country);
        setFilteredCities(cities); // Update the filtered cities state
      };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
      };
  
    return (
    <>
    <h2>Cascading Dropdown</h2>

    <label htmlFor="country">Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedCountry} // Disable if no country is selected
        >
          <option value="">Select a city</option>
          {/* Dynamically render city options based on the filteredCities state */}
          {filteredCities.map((item, index) => (
            <option key={index} value={item.city}>
              {item.city}
            </option>
          ))}
          </select>
    
    </>
    
);
  }