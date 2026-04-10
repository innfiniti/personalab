import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { system, messages, max_tokens = 1000 } = req.body;
  try {
    const payload = { model: 'claude-sonnet-4-6', max_tokens, messages };
    if (system) payload.system = system;
    const response = await client.messages.create(payload);
    res.status(200).json(response);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}
