export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, service, location, urgency, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  const transactionalId = process.env.LOOPS_TRANSACTIONAL_ID;

  if (!apiKey || !transactionalId) {
    console.error('Missing Loops environment variables');
    // We return 500 but log it to not expose to the client
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: transactionalId,
        email: 'bhelengperth@gmail.com', // The company email
        dataVariables: {
          name,
          senderEmail: email, // Avoid conflicting with the recipient `email` field above
          phone: phone || 'N/A',
          service: service || 'N/A',
          location: location || 'N/A',
          urgency: urgency || 'N/A',
          message,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Loops API error:', errorData);
      return res.status(502).json({ message: 'Failed to send email via Loops' });
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error sending email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
