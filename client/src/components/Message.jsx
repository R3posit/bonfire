import React from 'react';
import '../styles/Message.css';

const Message = ({ username, text }) => {
  return (
    <div className="message">
      <img 
        className="profile-pic" 
        src="https://styles.redditmedia.com/t5_388p4/styles/communityIcon_hlczkoi3mr3d1.jpg?format=pjpg&s=de08f60c59723a4d6e367247e07c41ff156f01a0" 
        alt={`${username}'s profile`} 
      />
      <div className="message-content">
        <span className="username">{username}</span>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
