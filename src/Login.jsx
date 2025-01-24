import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleForgotPassword = () => {
    navigate('/password');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'User' && credentials.password === 'User@123') {
      // Successful login
      setError('');
      // Navigate to Home page
      navigate('/home');
    } else {
      setError('Invalid username or password. Please use User/User@123');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <div className="login-header">
            <img src="/login.png" alt="Login Icon" className="login-icon" />
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="input-field"
                style={{ color: 'black' }}
                value={credentials.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                style={{ color: 'black' }}
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <div className="forgot-password">
              <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div className="login-right">
          <h3></h3>
          <img
            src="/logo.png"
            alt="Acorn Travels Logo"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
