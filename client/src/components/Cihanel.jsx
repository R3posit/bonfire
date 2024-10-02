import React, { useState } from 'react';
import '../styles/Cihanel.css';
import UserPanel from '../components/UserPanel';

const Cihanel = ({ setCurrentChannel, channels, username, handleLogout }) => {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
    setCurrentChannel(channel);
  };

  return (
    <div className="channel-bar">
      <h4 className="server-name">Sunucu Adı</h4>
      <img 
        src="https://blog.snappa.com/wp-content/uploads/2021/10/discord-server-banner.jpg" 
        alt="Sunucu Banner" 
        className="server-banner" 
      />
      <h4 className="channel-title">KANALLAR</h4>
      <ul className="channel-list">
        {channels.map(channel => (
          <li 
            key={channel} 
            className={`channel-item ${selectedChannel === channel ? 'active' : ''}`} 
            onClick={() => handleChannelClick(channel)}
          >
            #{channel}
          </li>
        ))}
      </ul>
      <UserPanel username={username} onLogout={handleLogout} />
    </div>
  );
};

export default Cihanel;
