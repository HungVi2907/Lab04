import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { path: '/section-1', label: 'Section 1 · WindowResizer (useEffect)' },
  { path: '/section-2', label: 'Section 2 · Stopwatch (useRef)' },
  { path: '/section-3', label: 'Section 3 · UserList (Data Fetching)' },
  { path: '/section-4', label: 'Section 4 · RegisterForm (Controlled Inputs)' },
  { path: '/products', label: 'Section 5 · Product List & Detail (Router)' },
  { path: '/section-6', label: 'Section 6 · Theme Playground (Context)' },
  { path: '/section-7', label: 'Section 7 · Input Playground (Custom Hook)' },
  { path: '/login', label: 'Mini Project · Login' },
  { path: '/dashboard', label: 'Mini Project · Dashboard' },
];

const accentPalette = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)'];

export default function ExerciseMenu() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Chào buổi sáng ☕' : hour < 18 ? 'Buổi chiều năng động ☀️' : 'Buổi tối sáng tạo 🌙';
  const todaysFocus = useMemo(() => sections[Math.floor(Math.random() * sections.length)].label, []);

  return (
    <main className="section-stack">
      <header className="card">
        <p className="badge">{greeting}</p>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
          Lab 4 · Practice Hub
        </h1>
        <p>Ôn từng khái niệm riêng lẻ, sau đó quay lại mini-project để ghép chúng lại.</p>
        <div className="panel" style={{ marginTop: '1.5rem' }}>
          <strong>Gợi ý hôm nay:</strong>
          <p style={{ margin: '0.35rem 0 0' }}>{todaysFocus}</p>
        </div>
      </header>

      <ol className="menu-grid">
        {sections.map((section, index) => {
          const accent = accentPalette[index % accentPalette.length];
          const cardStyle = {
            borderColor: `${accent}44`,
            background: `linear-gradient(135deg, rgba(15,23,42,0.9), ${accent}33)`,
          };
          return (
            <li key={section.path}>
              <Link className="menu-card" style={cardStyle} to={section.path}>
                <p className="badge" style={{ marginBottom: '0.75rem', borderColor: `${accent}66` }}>
                  Section {index + 1}
                </p>
                <h3 style={{ margin: 0 }}>{section.label}</h3>
                <p style={{ margin: '0.5rem 0 0' }}>Nhấp để mở bài tập.</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
