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

export default function ExerciseMenu() {
  return (
    <main style={{ padding: '2rem', maxWidth: '640px', margin: '0 auto' }}>
      <h1>Lab 4 · Practice Hub</h1>
      <p>Pick a section to focus on a single React concept before combining them.</p>
      <ol style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sections.map((section) => (
          <li key={section.path}>
            <Link to={section.path}>{section.label}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
