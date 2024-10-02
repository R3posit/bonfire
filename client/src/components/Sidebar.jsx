import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ servers, onSelectServer }) => {
  return (
    <div className="sidebar">
      <div className="servers">
        {servers.map((server, index) => (
          <img
            key={index}
            className="server-icon"
            src={server.logo}
            alt={`Sunucu ${server.name}`}
            onClick={() => onSelectServer(server)} // Tıklanıldığında sunucuyu seç
          />
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;






// const server_logos = [
//     "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuV3pnrrgeSNYPADFteFSiKUUFgD-04hYBA&s",
//     "https://archive.org/download/discordprofilepictures/discordyellow.png",
//     "https://archive.org/download/discordprofilepictures/discordgreen.png",
//     "https://miro.medium.com/max/256/0*8WdBp_k4REJoMkfF.png"
// ];