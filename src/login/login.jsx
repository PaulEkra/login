import React, { useState } from 'react';
import axios from 'axios';
import "./style.modules.css";
import { useNavigate } from 'react-router-dom'; 

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: username,
        password: password
      });

      navigate('/auth', { state: { email: username } });
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        LOGIN
      </button>
      <div className="forgot-password">
        Forgot your password?
      </div>
      <div className="sign-up">
        New here? Sign Up
      </div>
    </div>
  );
}
