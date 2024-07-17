import React, { useState } from 'react';
import axios from '../components/axiosInstance'; // Use axiosInstance
import '../style/admin.css';
import { useNavigate } from 'react-router-dom';

const AdminLoginComponent = () => {
  const navigate = useNavigate();
  const [adminLogin, setAdminLogin] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminLogin({ ...adminLogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/login', adminLogin);
      if (response.data === 'Login successful') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/admin/dashboard'); 
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required onChange={handleChange} />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginComponent;
