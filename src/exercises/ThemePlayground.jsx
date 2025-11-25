import ThemeButton from './ThemeButton';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemePanel() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const panelStyle = {
    padding: '1.5rem',
    borderRadius: '1rem',
    marginTop: '1rem',
    background: isDark ? 'rgba(15,23,42,0.8)' : 'rgba(226,232,240,0.9)',
    color: isDark ? '#f1f5f9' : '#0f172a',
    border: '1px solid rgba(255,255,255,0.15)',
  };

  return (
    <div style={panelStyle}>
      <p style={{ marginTop: 0 }}>The background color changes with the global theme.</p>
      <ThemeButton />
    </div>
  );
}

export default function ThemePlayground() {
  return (
    <ThemeProvider>
      <section>
        <p className="badge">Section 6 · Context API</p>
        <h2>Theme Playground</h2>
        <p>Context chia sẻ state cho mọi component, tránh prop drilling.</p>
        <ThemePanel />
      </section>
    </ThemeProvider>
  );
}
