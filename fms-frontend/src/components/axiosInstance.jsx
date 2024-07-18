import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,  // Ensure withCredentials is set to true if you are using cookies or session-based authentication
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('shreyash:adminpass')  // Update with your actual credentials
  }
});

export default axiosInstance;
