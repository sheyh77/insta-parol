import React, { useState } from 'react';
import './App.css'; // bu yerda rasm va button CSS bo'lishi kerak

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
      const response = await fetch("https://my-backend-w3e6.onrender.com", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Kirish muvaffaqiyatli!');
        onLogin();
      } else {
        alert(data.message || 'Xatolik yuz berdi.');
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
      <div className="login-form">
        <h2 className='login-title'>Kirish sahifasi</h2>
        <input
          className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='input'
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin} disabled={loading}>
          <span className="text">
            {loading ? '⏳ Yuborilmoqda...' : '🔐 Kirish'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
