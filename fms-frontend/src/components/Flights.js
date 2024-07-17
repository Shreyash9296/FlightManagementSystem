import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/flights.css';

const FlightBookingComponent = () => { 
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingData, setBookingData] = useState({
    passengerName: '',
    contactNumber: '',
    email: '',
    numberOfPassengers: 1
  });
  const [totalPrice, setTotalPrice] = useState(0); // State for total price

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

    // Calculate total price
    if (name === 'numberOfPassengers' && selectedFlight) {
      const totalPrice = selectedFlight.price * parsedValue;
      setTotalPrice(totalPrice);
    }
  };

  const handleConfirmBooking = async () => {
    try {
      const response = await axios.post('http://localhost:8080/bookings', {
        ...bookingData,
        flight: { id: selectedFlight.id }
      });

      if (response.status === 200 || response.status === 201) {
        alert('Booking confirmed successfully!');
        setSelectedFlight(null);
        setBookingData({
          passengerName: '',
          contactNumber: '',
          email: '',
          numberOfPassengers: 1
        });
        setTotalPrice(0); // Reset total price
      } else {
        console.error('Failed to confirm booking:', response);
        alert('Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server Error:', error.response.data);
        alert(`Server Error: ${error.response.data.message || 'Failed to confirm booking. Please try again.'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Error:', error.request);
        alert('Request Error: No response received. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
        alert(`Error: ${error.message || 'Failed to confirm booking. Please try again.'}`);
      }
    }
  };

  return (
    <div className="flight-booking-container">
      <h2>Available Flights</h2>
      {flights.map((flight) => (
        <div key={flight.id} className="flight-info">
          <p>Flight ID: {flight.id}</p> {/* Added Flight ID */}
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
          <p>Total Price: ${totalPrice}</p> {/* Display total price */}
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};


export default FlightBookingComponent;
