export default async function handler(req, res) {
    // CORS headers - VIKTIGT för Vercel! 
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        console.log('📡 Fetching from Polymarket...');
        
        const response = await fetch('https://gamma-api.polymarket.com/events?active=true&closed=false&limit=100', {
            headers: {
                'Accept': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`Polymarket API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`✅ Success! ${data.length} events fetched`);
        
        return res.status(200).json(data);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        return res.status(500).json({ 
            error: error.message,
            details: 'Failed to fetch from Polymarket API'
        });
    }
}