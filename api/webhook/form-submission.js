export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch('http://154.26.132.111:5678/webhook/form-submission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.text();
        res.status(response.status).send(data);
    } catch (error) {
        console.error('Webhook proxy error:', error);
        res.status(500).json({ error: 'Failed to forward to webhook' });
    }
}
