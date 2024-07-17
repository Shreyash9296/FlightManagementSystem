import React from 'react'
import '../style/ProjectStyle.css'
import { Link } from 'react-router-dom';
// import { Home } from './Home';
import { LoginPage } from './Login';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import { Profile } from './Profile';
import {About} from './About';
import {Contact} from './Contact';
import {Destination} from './Destination';
import {Seats} from './Seats';
import Registration from './Registration';
import { Home } from './Home';
import ProfileViewer from './ProfileViewer';

export const Nav = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

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
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {isLoggedIn && (
          <button className="nav-button">
          <Link to="/profile">Profile</Link>
        </button>
        )}
      </nav>

      {/* Routes for navigation */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Seats" element={<Seats />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/profile" element={<ProfileViewer />} />
      </Routes>
    </div>
  );
};

export default Nav;
