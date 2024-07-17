import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../style/admindash.css';

const AdminDashboardComponent = () => {const [flightData, setFlightData] = useState({
  flightNumber: '',
  airline: '',
  departureCity: '',
  arrivalCity: '',
  departureTime: '',
  arrivalTime: '',
  price: '',
  capacity: '',
  availableSeats: ''
});
const [flights, setFlights] = useState([]);
const [editingFlightId, setEditingFlightId] = useState(null);

useEffect(() => {
  fetchFlights();
}, []);

const fetchFlights = async () => {
  try {
    const response = await axios.get('http://localhost:8080/flights');
    setFlights(response.data);
  } catch (error) {
    console.error('Error fetching flights:', error);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFlightData({ ...flightData, [name]: value });
};

const handleSaveFlight = async () => {
  try {
    if (editingFlightId) {
      await axios.put(`http://localhost:8080/flights/${editingFlightId}`, flightData);
    } else {
      await axios.post('http://localhost:8080/flights', flightData);
    }
    alert('Flight saved successfully!');
    resetForm();
    fetchFlights();
  } catch (error) {
    console.error('Error saving flight:', error);
    alert(`Error saving flight: ${error.response?.data?.message || error.message}`);
  }
};

const handleDeleteFlight = async (id) => {
  if (window.confirm('Are you sure you want to delete this flight?')) {
    try {
      await axios.delete(`http://localhost:8080/flights/${id}`);
      alert('Flight deleted successfully!');
      fetchFlights();
    } catch (error) {
      console.error('Error deleting flight:', error);
      alert(`Error deleting flight: ${error.response?.data?.message || error.message}`);
    }
  }
};

const handleEditFlight = (flight) => {
  setFlightData({
    ...flight,
    departureTime: formatDateForInput(flight.departureTime),
    arrivalTime: formatDateForInput(flight.arrivalTime)
  });
  setEditingFlightId(flight.id);
};

const formatDateForInput = (datetime) => {
  return datetime ? datetime.slice(0, 16) : ''; // Adjust format as needed
};

const resetForm = () => {
  setFlightData({
    flightNumber: '',
    airline: '',
    departureCity: '',
    arrivalCity: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    capacity: '',
    availableSeats: ''
  });
  setEditingFlightId(null);
};

return (
  <div className="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <div className="flight-form">
      <input name="flightNumber" value={flightData.flightNumber} onChange={handleInputChange} placeholder="Flight Number" />
      <input name="airline" value={flightData.airline} onChange={handleInputChange} placeholder="Airline" />
      <input name="departureCity" value={flightData.departureCity} onChange={handleInputChange} placeholder="Departure City" />
      <input name="arrivalCity" value={flightData.arrivalCity} onChange={handleInputChange} placeholder="Arrival City" />
      <input name="departureTime" type="datetime-local" value={flightData.departureTime} onChange={handleInputChange} placeholder="Departure Time" />
      <input name="arrivalTime" type="datetime-local" value={flightData.arrivalTime} onChange={handleInputChange} placeholder="Arrival Time" />
      <input name="price" value={flightData.price} onChange={handleInputChange} placeholder="Price" />
      <input name="capacity" value={flightData.capacity} onChange={handleInputChange} placeholder="Capacity" />
      <input name="availableSeats" value={flightData.availableSeats} onChange={handleInputChange} placeholder="Available Seats" />
      <button onClick={handleSaveFlight}>{editingFlightId ? 'Update Flight' : 'Save Flight'}</button>
      {editingFlightId && <button onClick={resetForm}>Cancel Edit</button>}
    </div>
    <div className="flight-list">
      <h2>Flight List</h2>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{flight.departureCity}</td>
              <td>{flight.arrivalCity}</td>
              <td>
                <button onClick={() => handleEditFlight(flight)}>Edit</button>
                <button onClick={() => handleDeleteFlight(flight.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};



export default AdminDashboardComponent;