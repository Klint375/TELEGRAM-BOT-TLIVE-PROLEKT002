'use client'
import { useState } from 'react'
export default function StreamPage(){
  const [amount, setAmount] = useState(1)
  const [message, setMessage] = useState('')
  async function donate(){
    const res = await fetch('/api/donate', {
      method:'POST', headers:{'content-type':'application/json'},
      body: JSON.stringify({amount, streamerAddress: 'STREAMER_TON_ADDRESS_EXAMPLE'})
    })
    const data = await res.json()
    setMessage(JSON.stringify(data, null, 2))
  }
  return (
    <div style={{display:'grid',gridTemplateColumns:'2fr 1fr', gap:16}}>
      <section className="card">
        <h3>Stream — Demo</h3>
        <div style={{display:'flex',gap:8}}>
          <button className="btn">Start Stream</button>
          <button className="btn">Stop Stream</button>
        </div>
        <div style={{marginTop:12}}>
          <h4>Donate</h4>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={e=>setAmount(e.target.value)} />
          <button className="btn" onClick={donate} style={{marginLeft:8}}>Donate</button>
          <pre style={{marginTop:12,whiteSpace:'pre-wrap'}}>{message}</pre>
        </div>
      </section>
      <aside className="card">
        <h4>Info</h4>
        <p>Комиссия 3% автоматически выделяется владельцу проекта.</p>
        <p>Owner TON: <code>UQA9obsFO32tQGb5PmXWY8PjqaPbILQN7N488MzB9SLIF2tY</code></p>
      </aside>
    </div>
  )
}
