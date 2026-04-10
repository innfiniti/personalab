export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, date, time } = req.body;
  console.log('[booking]', { name, email, date, time });
  res.status(200).json({ ok: true });
}
