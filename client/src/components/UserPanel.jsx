// src/components/UserPanel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPanel.css';

const UserPanel = ({ username, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="user-panel-container">
      <img 
        className="user-panel-profile-pic" 
        src="https://styles.redditmedia.com/t5_388p4/styles/communityIcon_hlczkoi3mr3d1.jpg" 
        alt={`${username}'s profile`} 
      />
      <div className="user-panel-details">
        <div className='logo-and-status-placement'>
        <span className="user-panel-username">{username}</span>
        <span className="user-panel-status"> Boşta</span>
        </div>
      </div>
      <div className='user-panel-keremke-butonke-ayarke'>
      <button className="user-panel-button" onClick={() => console.log("Mikrofon butonuna tıklandı.")}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/60/60955.png" 
          alt="Mikrofon" 
          className="user-panel-icon" 
        />
      </button>
      
      <button className="user-panel-button" onClick={() => console.log("Kulaklık butonuna tıklandı.")}>
        <img 
          src="https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/earphones-discord-headPhones-headset-512.png" 
          alt="Kulaklık" 
          className="user-panel-icon" 
        />
      </button>
      
      <button className="user-panel-button" onClick={() => navigate('/settings')}>
        <img 
          src="https://cdn3.emoji.gg/emojis/2637-settings.png" 
          alt="Ayarlar" 
          className="user-panel-icon" 
        />
      </button>

      </div>
    </div>
  );
};

export default UserPanel;
