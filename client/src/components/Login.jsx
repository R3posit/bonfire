import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      setTimeout(() => {
        navigate('/'); 
      }, 1000); 
    } catch (error) {
      console.error('Giriş hatası:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Giriş Yap</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input username-input"
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="login-input password-input"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Giriş Yap!</button>
      </form>
      <p className="signup-prompt">
        Hesabınız yok mu? <Link to="/register" className="signup-link">Kaydolun!</Link>
      </p>
    </div>
  );
};

export default Login;
