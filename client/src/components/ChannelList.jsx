import React from 'react';

const channels = ['genel', 'duyurular'];

const ChannelList = ({ setCurrentChannel }) => {
  return (
    <div className="channel-list">
      <h4>KANALLAR</h4>
      <ul>
        {channels.map(channel => (
          <li key={channel} onClick={() => setCurrentChannel(channel)}>
            #{channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
