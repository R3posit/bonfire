import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import '../src/styles/App.css';
import ChannelBar from './components/Cihanel';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const servers = [
    {
      name: 'Sunucu 1',
      logo: "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
      channels: ['genel', 'duyurular', 'oyun'],
    },
    {
      name: 'Sunucu 2',
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuV3pnrrgeSNYPADFteFSiKUUFgD-04hYBA&s",
      channels: ['sohbet', 'yardım', 'etkinlik'],
    },
  ];

  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [currentChannel, setCurrentChannel] = useState(selectedServer.channels[0]);
  const username = localStorage.getItem('username');

  const handleSelectServer = (server) => {
    setSelectedServer(server);
    setCurrentChannel(server.channels[0]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
      />
      <Route 
        path="/register" 
        element={isAuthenticated ? <Navigate to="/" /> : <Register />} 
      />
      <Route 
        path="/settings" 
        element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/" 
        element={isAuthenticated ? (
          <div className="App">
            <Sidebar servers={servers} onSelectServer={handleSelectServer} />
            <ChannelBar 
              channels={selectedServer.channels} 
              setCurrentChannel={setCurrentChannel} 
              username={username} 
              handleLogout={handleLogout} 
            />
            <Chat channelName={currentChannel} />
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      />
    </Routes>
  );
};

export default App;
