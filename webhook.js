// Telegram webhook handler (serverless)
import { Telegraf } from 'telegraf'
const BOT_TOKEN = process.env.BOT_TOKEN
export const config = { api: { bodyParser: true } }
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!BOT_TOKEN) return res.status(500).json({ error: 'BOT_TOKEN not set' })
  try {
    const bot = new Telegraf(BOT_TOKEN)
    const update = req.body
    // Simple echo / command handling for demo
    if (update.message) {
      const chatId = update.message.chat.id
      const text = update.message.text || ''
      if (text.startsWith('/start')) {
        await bot.telegram.sendMessage(chatId, 'Привет! Это тестовый бот TelegramStreamT.')
      } else {
        await bot.telegram.sendMessage(chatId, 'Echo: ' + text)
      }
    }
    // respond ok to Telegram
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'handler error' })
  }
}
