export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Tlive 🚀</h1>
      <p>Стриминг в Telegram с донатами и архивацией эфиров</p>
      <button
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Начать стрим 🎥
      </button>
    </main>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

{
  "name": "telegram-streamt",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "telegraf": "^4.15.0"
  }
}

node_modules
.next
.env
