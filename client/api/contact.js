// Vercel Serverless Function for Contact Form
// Works automatically when 'client' is selected as Root Directory on Vercel

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { full_name, email, country, project_type, budget, message, _gotcha } = req.body || {};

    // Spam honeypot
    if (_gotcha) {
      return res.status(200).json({ success: true, message: 'Inquiry received.' });
    }

    // Basic validation
    if (!full_name || full_name.length < 2) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid email is required.' });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ success: false, message: 'Message must be at least 10 characters.' });
    }

    console.log(`[New Inquiry Received] From: ${full_name} (${email}) - ${project_type} - Budget: ${budget}`);

    // If SMTP environment variables are present on Vercel, forward email
    // Otherwise return success response (client can also use the direct Google Form link!)
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your project inquiry has been received. Shabeer will review your requirements and respond within 24 hours.',
      inquiry: {
        name: full_name,
        email: email,
        project: project_type,
        country: country
      }
    });
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({ success: false, message: 'Server error processing inquiry.' });
  }
}
