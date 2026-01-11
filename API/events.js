// Använd native fetch (Node 18+)
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        console.log('📡 Fetching from Polymarket...');
        
        const response = await fetch('https://gamma-api.polymarket.com/events?active=true&closed=false&limit=100');
        
        if (!response. ok) {
            throw new Error(`Polymarket API returned ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`✅ Success! ${data.length} events`);
        
        res.status(200).json(data);
        
    } catch (error) {
        console.error('❌ Error:', error. message);
        res.status(500).json({ 
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
}