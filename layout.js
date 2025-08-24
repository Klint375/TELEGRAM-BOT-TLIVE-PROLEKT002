import './globals.css'
export const metadata = { title: 'TelegramStreamT', description: 'Stream platform demo with Telegram Wallet' }
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
            <h2>TelegramStreamT</h2>
            <nav><a href="/">Home</a> | <a href="/stream">Stream</a></nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
