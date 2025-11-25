import { useEffect, useState } from 'react';

export default function WindowResizer() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <p className="badge">Section 1 · useEffect</p>
      <h2 className="gradient-text">Window Resizer</h2>
      <p>Resize trình duyệt để thấy state đồng bộ với hệ thống bên ngoài.</p>
      <div className="panel" style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '3rem', fontWeight: 700 }}>{windowWidth}</p>
        <small style={{ color: 'var(--text-muted)' }}>pixels</small>
      </div>
    </section>
  );
}
