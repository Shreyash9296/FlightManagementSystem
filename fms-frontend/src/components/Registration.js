import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

export const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form >
<div className="form-group">
                    <label>Enter Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Enter Surname</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="form-group">

<label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
    );
};

