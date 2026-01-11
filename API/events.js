const fetch = require('node-fetch');

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        console.log('📡 Hämtar data från Polymarket.. .');
        const response = await fetch('https://gamma-api.polymarket.com/events?active=true&closed=false&limit=100');
        
        if (! response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(`✅ ${data.length} events hämtade`);
        
        res.status(200).json(data);
    } catch (error) {
        console.error('❌ Fel:', error.message);
        res.status(500).json({ error: error.message });
    }
};