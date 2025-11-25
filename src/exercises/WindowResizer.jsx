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
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 1 · useEffect</h2>
      <p>Resize the browser window to watch the value update in real time.</p>
      <h3>Window Width: {windowWidth}px</h3>
    </section>
  );
}
