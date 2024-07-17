// AdminDashboardComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import datepicker styles
import '../style/admin.css'
const AdminDashboardComponent = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureTime, setDepartureTime] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [price, setPrice] = useState('');

  const handleSaveFlight = async () => {
    try {
      const response = await axios.post('http://localhost:8080/flights', {
        flightNumber,
        airline,
        departureCity,
        arrivalCity,
        departureTime,
        arrivalTime,
        price,
      });

      if (response.status === 200) {
        alert('Flight saved successfully!');
        // Optionally, clear input fields after successful save
        setFlightNumber('');
        setAirline('');
        setDepartureCity('');
        setArrivalCity('');
        setDepartureTime(new Date());
        setArrivalTime(new Date());
        setPrice('');
      } else {
        alert('Failed to save flight. Please try again.');
      }
    } catch (error) {
      console.error('Error saving flight:', error);
      alert('Error saving flight. Please try again later.');
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Airline"
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
      />
      <input
        type="text"
        placeholder="Departure City"
        value={departureCity}
        onChange={(e) => setDepartureCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Arrival City"
        value={arrivalCity}
        onChange={(e) => setArrivalCity(e.target.value)}
      />
      <div className="date-picker-container">
        <label>Departure Time:</label>
        <DatePicker
          selected={departureTime}
          onChange={(date) => setDepartureTime(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div className="date-picker-container">
        <label>Arrival Time:</label>
        <DatePicker
          selected={arrivalTime}
          onChange={(date) => setArrivalTime(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSaveFlight}>Save Flight</button>
    </div>
  );
};

export default AdminDashboardComponent;
