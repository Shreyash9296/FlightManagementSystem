import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/profile.css';

const ProfileViewer = () => {
    const [user, setUser] = useState({});
    const [booking, setBooking] = useState({});
    const [airport, setAirport] = useState({
        airportCode: '',
        airportName: '',
        city: '',
        country: 'India'
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/1'); 
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchBookingData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/bookings/6'); 
                setBooking(response.data);

                const flightId = response.data.flight.id;
                const flightResponse = await axios.get(`http://localhost:8080/flights/${flightId}`);
                const flight = flightResponse.data;

                setAirport({
                    airportCode: Math.floor(Math.random() * 9000000) + 1000000,
                    airportName: `${flight.departureCity} International Airport`,
                    city: flight.departureCity,
                    country: 'India'
                });
            } catch (error) {
                console.error('Error fetching booking data:', error);
            }
        };

        fetchUserData();
        fetchBookingData();
    }, []); 

    return (
        <div className="profile">
            <h2>Profile Viewer</h2>
            <div className="profile-details">
                <h3>User Info</h3>
                <p>Name: {booking.passengerName}</p>
                <p>Email: {booking.email}</p>

                <h3>Booking Info</h3>
                <p>Passenger Name: {booking.passengerName}</p>
                <p>Contact Number: {booking.contactNumber}</p>
                <p>Email: {booking.email}</p>

                <h3>Airport Info</h3>
                <p>Airport Code: {airport.airportCode}</p>
                <p>Airport Name: {airport.airportName}</p>
                <p>City: {airport.city}</p>
                <p>Country: {airport.country}</p>
            </div>
        </div>
    );
};

export default ProfileViewer;
