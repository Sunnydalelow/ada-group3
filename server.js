import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful assistant for the American Diabetes Association (ADA). Your role is to:
- Provide accurate, compassionate information about diabetes
- Guide users to relevant resources on the ADA website
- Answer questions about diabetes management, nutrition, medications, and support
- Encourage users to consult healthcare professionals for medical advice
- Be warm, supportive, and understanding

Keep responses concise and helpful. If asked about medical decisions, remind users to consult their healthcare provider.`;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: message }],
    });

    const text = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, I had trouble processing that.';

    res.json({ text });
  } catch (error) {
    console.error('Claude API error:', error.message);
    res.status(500).json({ error: 'Failed to get response from assistant' });
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - send all requests to index.html
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ADA Help Center running on port ${PORT}`);
});
