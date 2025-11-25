import ThemeButton from './ThemeButton';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemePanel() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const panelStyle = {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
    background: isDark ? '#1f2933' : '#f1f5f9',
    color: isDark ? '#f1f5f9' : '#111827',
  };

  return (
    <div style={panelStyle}>
      <p>The background color changes with the global theme.</p>
      <ThemeButton />
    </div>
  );
}

export default function ThemePlayground() {
  return (
    <ThemeProvider>
      <section style={{ padding: '1.5rem' }}>
        <h2>Section 6 · Context API</h2>
        <p>All nested components read the same theme value from context.</p>
        <ThemePanel />
      </section>
    </ThemeProvider>
  );
}
