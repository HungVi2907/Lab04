import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function Dashboard() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <button onClick={() => navigate('/')}>Logout</button>
      <hr />

      <h3>User List (Fetched via custom hook)</h3>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
