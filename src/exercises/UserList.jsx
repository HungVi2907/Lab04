import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const json = await response.json();
        if (isMounted) {
          setUsers(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <p className="badge">Section 3 · Data Fetching</p>
      <h2>Remote User List</h2>
      <p>Hook quản lý loading/data/error để UI luôn phản hồi.</p>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: '#f87171' }}>Error: {error}</p>}
      {users && (
        <ul className="list-clean panel">
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
