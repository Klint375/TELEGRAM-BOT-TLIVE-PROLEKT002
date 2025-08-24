# TelegramStreamT — Next.js + Telegram bot (demo)

Этот проект подготовлен с учётом твоих требований:
- Включён Telegram Bot webhook handler (pages/api/webhook.js)
- Включён API-эндпоинт для обработки донатов и вычисления 3% комиссии
- Включены инструкции по привязке домена и установке webhook для Telegram
- Включены .env (с заполненным токеном как ты просил) — РЕГЕНЕРИРУЙ токен в Telegram для безопасности после тестов

**Домен:** https://www.telegramstreamt.live/
**Bot token (включён в .env):** 8448723827:AAG3XYmczWOkQJvYq9zyqdBEzM3yAYig7tU
**Owner TON address (3% commission):** UQA9obsFO32tQGb5PmXWY8PjqaPbILQN7N488MzB9SLIF2tY

## Как запустить локально
1. Установить зависимости:
   ```bash
   npm install
   ```
2. Запустить dev-сервер:
   ```bash
   npm run dev
   ```
3. Для тестирования webhook можно использовать ngrok, затем выполнить команду для установки webhook:
   ```bash
   node setWebhook.js
   ```
   или вручную в Telegram BotFather установить webhook на `https://<your-domain>/api/webhook`.

## Как деплоить на Vercel
1. Загрузить репозиторий на GitHub/GitLab и создать проект в Vercel.
2. В настройках проекта добавить переменные окружения (если не хотите хранить токен в репозитории):
   - BOT_TOKEN
   - OWNER_TON_ADDRESS
   - PUBLIC_DOMAIN (https://www.telegramstreamt.live)
3. Если проект в корне репозитория — Root Directory пустой.
4. После деплоя установить webhook Telegram на `https://www.telegramstreamt.live/api/webhook` (используя setWebhook.js или вручную).

## Как работает обработка донатов (демо)
- На фронте есть кнопка Donate, которая вызывает `/api/donate` с суммой и адресом получателя.
- Сервер рассчитывает 3% комиссию и возвращает инструкции по переводу:
  - 97% — на адрес стримера (передать в интеграцию TonConnect / платежный провайдер)
  - 3% — на адрес владельца проекта (указан выше)
- **ВНИМАНИЕ:** Автоматические переводы требуют подключения реального кошелька/провайдера TON. В проекте находится лишь серверная логика расчёта и пример вызова.
