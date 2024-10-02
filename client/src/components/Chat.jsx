import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import '../styles/Chat.css';
import Message from './Message';

const socket = io('http://localhost:5000');

const Chat = ({ channelName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [navigate, username]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { username, text: input, channel: channelName };
      socket.emit('chat message', newMessage);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <h2>{channelName}</h2>
      <div className="messages">
        {messages.filter(msg => msg.channel === channelName).map((msg, index) => (
          <Message key={index} username={msg.username} text={msg.text} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Mesaj yaz..."
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
