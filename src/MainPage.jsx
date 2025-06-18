import React, { useState } from 'react';
import './App.css';

const MainPage = () => {
  const [buyurtmaHolati, setBuyurtmaHolati] = useState('');

  const handleOrder = () => {
    setBuyurtmaHolati("✅ Buyurtma qabul qilindi! 30-60 daqiqa ichida sizga ogohlantirish yuboriladi.");
  };

  return (
    <div className="main-container">
      {/* Kontent */}
      <div className="content">
        <h1 className="title">Obunachilar xizmatlari</h1>
        <p className="subtitle">Iltimos, kerakli obunachilar turini tanlang:</p>

        <div className="buttons">
          <button className="btn rus">🇷🇺 Rus obunachilar</button>
          <button className="btn uzbek">🇺🇿 O‘zbek obunachilar</button>
          <button className="btn mix">🌐 Aralash obunachilar</button>
        </div>

        <button className="order-btn" onClick={handleOrder}>
          🚀 Buyurtma berish
        </button>

        {/* Buyurtma holatini chiqarish */}
        {buyurtmaHolati && (
          <div className="status-message">{buyurtmaHolati}</div>
        )}
      </div>
    </div>
  );
};

export default MainPage;

