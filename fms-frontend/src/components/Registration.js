import React, { useState } from 'react';
import axios from 'axios';
import '../style/Register.css'
const Registration = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        id,
        name,
        email,
        password
      });
      console.log(response.data);
      setSuccessMessage('User registered successfully!');
      // Reset form fields
      setId('');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='register-form'>
      <label>
          ID:
          <input
            type="number"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="Create your USER ID"
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
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
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </form>
    </div>
  );
};

export default Registration;
