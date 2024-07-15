import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
export const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
      return (
          <div className="container">
              <h2>Sign In</h2>
              <form>
                  <div className="form-group">
                      <label>Enter Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                      <label>Enter Password</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/Registration">Register here</a></p>
        </div>
    );
};

 