// Простая логика расчёта и инструкций для перевода донатов.
export const config = { api: { bodyParser: true } }
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  const { amount, streamerAddress } = req.body || {}
  if (!amount || !streamerAddress) return res.status(400).json({ error: 'amount and streamerAddress required' })
  const raw = Number(amount)
  if (isNaN(raw) || raw <= 0) return res.status(400).json({ error: 'invalid amount' })
  const commission = +(raw * 0.03).toFixed(8)
  const toStreamer = +(raw - commission).toFixed(8)
  const owner = process.env.OWNER_TON_ADDRESS || 'UQA9obsFO32tQGb5PmXWY8PjqaPbILQN7N488MzB9SLIF2tY'
  // Возвращаем инструкции — в проде здесь нужно подключить Ton SDK / провайдер для автоматических переводов
  res.status(200).json({
    ok: true,
    amount: raw,
    commission,
    toStreamer,
    streamerAddress,
    ownerAddress: owner,
    instructions: [
      `Перевести ${toStreamer} TON на адрес стримера: ${streamerAddress}`,
      `Перевести ${commission} TON (3%) на адрес владельца проекта: ${owner}`
    ]
  })
}
