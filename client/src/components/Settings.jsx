import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Token ve kullanıcı bilgilerini temizle
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setTimeout(() => {
      navigate('/login'); 
    }, 1000); 
  };

  return (
    <div>
      <h2>Ayarlar</h2>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
};

export default Settings;
