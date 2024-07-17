import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import '../style/ProjectStyle.css';
import { LoginPage } from './Login';
import { About } from './About';
import { Contact } from './Contact';
import { Destination } from './Destination';
import { Seats } from './Seats';
import Registration from './Registration';
import { Home } from './Home';
import ProfileViewer from './ProfileViewer';
import AdminLoginComponent from './AdminLoginComponent'; 
import AdminDashboardComponent from './AdminDashboardComponent';
export const Nav = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload(); // Reload page to reflect logout status
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Destination">Destination</Link>
        <Link to="/Seat">Find Seats</Link>
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <button className="nav-button">
              <Link to="/profileviewer">Profile</Link>
            </button>
            <button className="nav-button">
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/admin/login">Admin Login</Link>
          </>
        )}
      </nav>

      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Seat" element={<Seats />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/profileviewer" element={<ProfileViewer />} />
        <Route path="/admin/login" element={<AdminLoginComponent />} />
        <Route path="/admin/dashboard" element={<AdminDashboardComponent />} />
      </Routes>
    </div>
  );
};

export default Nav;
