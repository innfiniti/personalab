export default function handler(req, res) {
  const hasKey = !!process.env.ANTHROPIC_API_KEY;
  res.status(hasKey ? 200 : 503).json({ ok: hasKey, engine: 'claude-sonnet-4-6' });
}
