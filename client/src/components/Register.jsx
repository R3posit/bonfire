import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, password });
        navigate('/login'); 
    } catch (error) {
      console.error('Kayıt hatası:', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Kaydol</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          className="register-input username-input"
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="register-input password-input"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="register-button" type="submit">Kaydol</button>
      </form>
      <p className="login-prompt">
        Zaten hesabınız var mı? <Link to="/login" className="login-link">Giriş Yapın!</Link>
      </p>
    </div>
  );
};

export default Register;
