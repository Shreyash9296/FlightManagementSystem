import React, { useState } from 'react';
import { Nav } from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { Home } from './components/Home';
import Travelers from './components/Travelers';
import Footer from './components/Footer';
import FlightBookingComponent from './components/Flights';
import ProfileViewer from './components/ProfileViewer'; // Import ProfileViewer component
import AdminDashboardComponent from './components/AdminDashboardComponent'; // Import AdminDashboardComponent
import './style/ProjectStyle.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} /> {/* Pass isLoggedIn state and logout function to Nav component */}
            <Header />
            <BookingForm />
            <Travelers />
            <FlightBookingComponent /> {/* Render FlightBookingComponent */}
            {isLoggedIn ? <ProfileViewer /> : <Home />} {/* Conditional rendering based on isLoggedIn state */}
            {isLoggedIn && <AdminDashboardComponent />} {/* Render AdminDashboardComponent if logged in */}
            <Footer />
        </div>
    );
};

export default App;
