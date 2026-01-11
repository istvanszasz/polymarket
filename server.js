const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// API proxy endpoint
app.get('/api/events', async (req, res) => {
    try {
        console.log('📡 Hämtar data från Polymarket.. .');
        const response = await fetch('https://gamma-api.polymarket.com/events? active=true&closed=false&limit=100');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(`✅ Framgång!  ${data.length} events hämtade`);
        res.json(data);
    } catch (error) {
        console.error('❌ Fel:', error. message);
        res.status(500).json({ error: error.message });
    }
});

// Servera static filer
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// För Vercel serverless
module.exports = app;

// För lokal development
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`\n🚀 Server igång! `);
        console.log(`📱 Öppna: http://localhost:${PORT}\n`);
    });
}