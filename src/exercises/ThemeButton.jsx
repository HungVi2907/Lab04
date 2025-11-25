import { useTheme } from '../context/ThemeContext';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button type="button" className="btn" onClick={toggleTheme}>
      Toggle Theme (current: {theme})
    </button>
  );
}
