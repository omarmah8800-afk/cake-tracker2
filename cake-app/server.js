const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

const BOT_TOKEN = '8761852794:AAHIitqu4BInjGrYtJAGgJ_FbzU6CvueMW0'; // حط التوكن بتاعك هنا
const CHAT_ID = '8731852555';     // حط الشات أيدي بتاعك هنا

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/opened', async (req, res) => {
    const text = '🎉 البنت فتحت اللينك وشافت صورة التورتة دلوقتي!';
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text })
        });
    } catch (err) {
        console.error(err);
    }
    res.json({ status: 'ok' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// هذا السطر مهم جداً لكي يعمل على Vercel
module.exports = app;