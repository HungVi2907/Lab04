import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Login() {
  const [username, setUsername] = useLocalStorage('user_name', '');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim()) {
      navigate('/dashboard');
    } else {
      alert('Vui lòng nhập tên!');
    }
  };

  return (
    <main className="section-stack" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <section>
        <p className="badge">Mini project · Step 1</p>
        <h2>Login</h2>
        <p>Giữ lại username với <code>useLocalStorage</code>.</p>
        <form className="form-panel" onSubmit={handleSubmit}>
          <label style={{ display: 'block' }}>
            <span style={{ display: 'block', marginBottom: '0.35rem' }}>Username</span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Nhập tên của bạn"
            />
          </label>
          <button type="submit" className="btn" style={{ marginTop: '1rem' }}>
            Login
          </button>
        </form>
        <p>
          <small>Reload trang để thấy tên vẫn được lưu nhờ custom hook.</small>
        </p>
      </section>
    </main>
  );
}
