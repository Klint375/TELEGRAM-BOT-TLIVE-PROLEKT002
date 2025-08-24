// Скрипт для установки webhook у Telegram бота на PUBLIC_DOMAIN/api/webhook
const axios = require('axios')
const token = process.env.BOT_TOKEN
const domain = process.env.PUBLIC_DOMAIN
if (!token || !domain) {
  console.error('BOT_TOKEN or PUBLIC_DOMAIN not set in env')
  process.exit(1)
}
const url = `${domain.replace(/\/$/, '')}/api/webhook`
;(async ()=>{
  try{
    const res = await axios.get(`https://api.telegram.org/bot${token}/setWebhook?url=${encodeURIComponent(url)}`)
    console.log(res.data)
  }catch(e){
    console.error(e.response ? e.response.data : e.message)
  }
})()
