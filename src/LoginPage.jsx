import React, { useState } from 'react';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      return alert('Iltimos, username va parolni kiriting.');
    }

    setLoading(true);
    try {
      const response = await fetch("https://my-backend.onrender.com/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Kirish muvaffaqiyatli!');
        onLogin(); // App.jsx orqali MainPage ga o'tish
      } else {
        alert(data.message || '❌ Xatolik yuz berdi.');
      }
    } catch (error) {
      console.error('Server xatoligi:', error);
      alert('❌ Server bilan bog‘lanishda xatolik.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop id="bg-video">
        <source src="/videos/login-bg2.mp4" type="video/mp4" />
        Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
      </video>

      <div className="login-form">
        <h2>Kirish sahifasi</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? '⏳ Yuborilmoqda...' : '🔐 Kirish'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
