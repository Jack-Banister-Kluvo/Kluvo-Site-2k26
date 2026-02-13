export default async function handler(req, res) {
    // Only allow POST from the frontend
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // n8n webhook is configured for GET requests, so we send data as query params
        const params = new URLSearchParams({
            name: req.body.name || '',
            email: req.body.email || '',
            source: req.body.source || '',
            timestamp: req.body.timestamp || new Date().toISOString(),
        });

        const response = await fetch(
            `http://154.26.132.111:5678/webhook/form-submission?${params.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }
        );

        const data = await response.text();
        res.status(response.status).send(data);
    } catch (error) {
        console.error('Webhook proxy error:', error);
        res.status(500).json({ error: 'Failed to forward to webhook' });
    }
}
