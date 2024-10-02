import React, { useEffect, useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUsername(user.username);
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h2>Ana Ekran</h2>
      {username && <p>Hoşgeldin, {username}!</p>}
    </div>
  );
};

export default Home;
