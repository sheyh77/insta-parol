const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Foydalanuvchi kiritdi:', username, password);

  // Shu yerda ma'lumotni faylga yozish, database yoki emailga yuborish mumkin
  res.status(200).json({ message: 'Login ma’lumotlari qabul qilindi' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
});
