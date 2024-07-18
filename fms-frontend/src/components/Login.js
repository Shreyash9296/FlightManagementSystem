import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css'

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
    axios.post('http://localhost:8080/user/login', {
      email,
      password
    })
    .then(response => {
      if (response.data === 'Login successful') {
        console.log('Login successful!');
        // Perform additional actions upon successful login if needed
        // For example, redirect to another page or set user authentication state
      } else {
        console.error('Login failed:', response.data);
        setError(response.data); // Set error message received from the backend
      }
    })}
    catch(error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
        setError(error.response.data); // Set error message based on server response
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    };
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