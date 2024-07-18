import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css'

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/user/login', {
      email,
      password
    })
    .then(response => {
      console.log('Response data:', response.data); 
    
      if (response.status === 200 && response.data.trim() === 'Login successful') {
        console.log('Login successful!');
        setError(null); 
      } else {
        console.error('Login failed:', response.data);
        setError(response.data); // Set error message received from the backend
      }
    })
    .catch(error => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
        setError(error.response.data); // Set error message based on server response
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
        setError('Error setting up the request');
      }
    });
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
