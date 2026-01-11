export default async function handler(req, res) {
    // CORS
    res. setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req. method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Node 18+ har inbyggd fetch
        const response = await fetch(
            'https://gamma-api.polymarket.com/events? active=true&closed=false&limit=100'
        );
        
        if (!response.ok) {
            throw new Error(`Polymarket API error: ${response.status}`);
        }
        
        const data = await response.json();
        return res.status(200).json(data);
        
    } catch (error) {
        console.error('API Error:', error);
        return res. status(500).json({ 
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
}