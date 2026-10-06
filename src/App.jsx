export default function App() {
  return (
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex", 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif'
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>
          Domain Reserved
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '2rem' }}>
          This domain is currently reserved for a professional project and business use. 
          For business inquiries, collaborations, partnerships, freelance development, 
          or other professional opportunities, please get in touch:
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          <a 
            href="mailto:mohitsingh2003uk@gmail.com" 
            style={{ color: '#0066cc', textDecoration: 'none' }}
          >
            mohitsingh2003uk@gmail.com
          </a>
        </p>
        <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
          © 2026 — All rights reserved.
        </footer>
      </div>
    </div>
  );
}
