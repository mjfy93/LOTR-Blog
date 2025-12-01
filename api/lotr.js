
export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {

        const { endpoint } = req.query;

        if (!endpoint) {
            return res.status(400).json({ error: 'Endpoint parameter is required' });
        }

        const bearerToken = process.env.LOTR_API_TOKEN;

        if (!bearerToken) {
            console.error('LOTR_API_TOKEN is not set');
            return res.status(500).json({ error: 'API token not configured' });
        }


        const apiUrl = `https://the-one-api.dev/v2/${endpoint}`;


        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        return res.status(response.status).json(data);

    } catch (error) {
        console.error('Error proxying request:', error);
        return res.status(500).json({
            error: 'Failed to fetch data',
            message: error.message
        });
    }
}