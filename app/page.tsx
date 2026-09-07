export default function Home() {
  return (
    <div style={{background:'#f6f8ff', minHeight:'100vh', padding:'20px', fontFamily:'sans-serif'}}>
      <header style={{background:'white', padding:'15px 20px', borderRadius:'16px', display:'flex', justifyContent:'space-between'}}>
        <b style={{fontSize:'22px'}}>🔗 Forte Link</b>
        <a href="#" style={{background:'#22c55e', color:'white', padding:'8px 18px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>Começar Grátis</a>
      </header>
      <main style={{marginTop:'40px'}}>
        <h1 style={{fontSize:'48px', fontWeight:'900', color:'#0f2a4a', lineHeight:'1'}}>Porteiro<br/>Eletrônico<br/>Inteligente</h1>
        <p style={{color:'#666', maxWidth:'500px', marginTop:'15px'}}>A segurança do seu condomínio agora no WhatsApp. Controle o Hikvision DS-K1T673DX com videochamadas em tempo real.</p>
        <div style={{marginTop:'20px', display:'flex', gap:'10px'}}>
          <button style={{background:'#16a34a', color:'white', padding:'12px 24px', borderRadius:'10px', border:'none', fontWeight:'bold', boxShadow:'0 0 15px rgba(34,197,94,0.5)'}}>💬 Iniciar agora</button>
          <button style={{background:'white', padding:'12px 24px', borderRadius:'10px', border:'1px solid #0f2a4a'}}>Ver o painel</button>
        </div>
      </main>
    </div>
  )
}
