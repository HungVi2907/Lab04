import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function Dashboard() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const navigate = useNavigate();

  return (
    <main className="section-stack" style={{ paddingTop: '3rem' }}>
      <section>
        <p className="badge">Mini project · Step 2</p>
        <div className="button-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>Dashboard</h1>
          <button type="button" className="btn secondary" onClick={() => navigate('/')}>Logout</button>
        </div>
        <p>User list được tải thông qua custom hook <code>useFetch</code>.</p>

        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: '#f87171' }}>Error: {error.message}</p>}

        {data && (
          <ul className="list-clean panel">
            {data.map((user) => (
              <li key={user.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <strong>{user.name}</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
