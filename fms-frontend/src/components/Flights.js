import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/flights.css';
axios.defaults.withCredentials = true;
const FlightBookingComponent = () => { 
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingData, setBookingData] = useState({
    passengerName: '',
    contactNumber: '',
    email: '',
    numberOfPassengers: 1,
    flight: null  // Add this line to initialize the flight property
  });
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleBookClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'numberOfPassengers' ? parseInt(value) : value;
    setBookingData({ ...bookingData, [name]: parsedValue });

    if (name === 'numberOfPassengers' && selectedFlight) {
      const totalPrice = selectedFlight.price * parsedValue;
      setTotalPrice(totalPrice);
    }
  };
 
  const handleConfirmBooking = async () => {
    try {
      console.log('Sending booking request...');
      const bookingPayload = {
        passengerName: bookingData.passengerName,
        contactNumber: bookingData.contactNumber,
        email: bookingData.email,
        numberOfPassengers: bookingData.numberOfPassengers,
        flight: { id: selectedFlight.id }
      };
      console.log('Booking Data:', bookingPayload);
  
      const response = await axios.post('http://localhost:8080/bookings', bookingPayload, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
  
      console.log('Booking successful:', response.data);
      alert('Booking confirmed successfully!');
      
      // Reset form and state
      setSelectedFlight(null);
      setBookingData({
        passengerName: '',
        contactNumber: '',
        email: '',
        numberOfPassengers: 1
      });
      setTotalPrice(0);
    } catch (error) {
      console.error('Booking failed:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        alert(`Booking failed: ${error.response.data}`);
      } else if (error.request) {
        alert('Booking failed: No response received from server');
      } else {
        alert(`Booking failed: ${error.message}`);
      }
    }
  };


  const testServerConnection = async () => {
    try {
      const response = await axios.get('http://localhost:8080/flights', { 
        timeout: 5000,
        withCredentials: true
      });
      console.log('Server connection test successful:', response.status);
    } catch (error) {
      console.error('Server connection test failed:', error);
    }
  };
  
  // Call this in useEffect
  useEffect(() => {
    fetchFlights();
    testServerConnection();
  }, []);
  return (
    <div className="flight-booking-container">
      <h2>Available Flights</h2>
      {flights.map((flight) => (
        <div key={flight.id} className="flight-info">
          <p>Flight ID: {flight.id}</p>
          <p>Flight Number: {flight.flightNumber}</p>
          <p>Airline: {flight.airline}</p>
          <p>Departure: {flight.departureCity} at {new Date(flight.departureTime).toLocaleString()}</p>
          <p>Arrival: {flight.arrivalCity} at {new Date(flight.arrivalTime).toLocaleString()}</p>
          <p>Price: ${flight.price}</p>
          <p>Available Seats: {flight.availableSeats}</p>
          <button onClick={() => handleBookClick(flight)}>Book</button>
        </div>
      ))}

      {selectedFlight && (
        <div className="booking-form">
          <h3>Book Flight: {selectedFlight.flightNumber}</h3>
          <input
            type="text"
            name="passengerName"
            placeholder="Passenger Name"
            value={bookingData.passengerName}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={bookingData.contactNumber}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={bookingData.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="numberOfPassengers"
            placeholder="Number of Passengers"
            value={bookingData.numberOfPassengers}
            onChange={handleInputChange}
            min="1"
          />
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default FlightBookingComponent;