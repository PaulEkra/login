import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import "./style.modules.css";

export function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/otp/verify/', {
        email: email,
        code: code
      });

      // Traitez la réponse ici
      console.log('OTP verification successful:', response.data);

      // Rediriger vers la page /home si la vérification est réussie
      navigate('/home');

    } catch (error) {
      // Gérez les erreurs ici
      console.error('OTP verification failed:', error);
    }
  };

  return (
    <div className="two-factor-auth-container">
      <h1>Authentification à deux facteurs</h1>
      <form onSubmit={handleSubmit} className="two-factor-auth-form">
        <div className="input-field">
          <label htmlFor="code">Code d'authentification :</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Saisissez le code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Valider
        </button>
      </form>
    </div>
  );
}
