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
    <div style={{ padding: '20px' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Login
        </button>
      </form>
      <p>
        <small>Reload trang để thấy tên vẫn được lưu nhờ useLocalStorage!</small>
      </p>
    </div>
  );
}
