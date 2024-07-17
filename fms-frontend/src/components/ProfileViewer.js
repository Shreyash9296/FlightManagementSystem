// ProfileViewer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios or any HTTP library
import '../style/profile.css'
const ProfileViewer = () => {
    const [user, setUser] = useState({});
    const [booking, setBooking] = useState({});
    const [airport, setAirport] = useState({});

    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/user/{userId}');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Function to fetch booking data
        const fetchBookingData = async () => {
            try {
                const response = await axios.get('/bookings/{bookingId}');
                setBooking(response.data);
            } catch (error) {
                console.error('Error fetching booking data:', error);
            }
        };

        // Function to fetch airport data
        const fetchAirportData = async () => {
            try {
                const response = await axios.get('/airports/{airportId}');
                setAirport(response.data);
            } catch (error) {
                console.error('Error fetching airport data:', error);
            }
        };

        // Call all fetch functions
        fetchUserData();
        fetchBookingData();
        fetchAirportData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div className="profile">
            <h2>Profile Viewer</h2>
            <div className="profile-details">
                <h3>User Info</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>

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
