import { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    setMessage(`Submitted: ${formData.email}`);
  };

  return (
    <section>
      <p className="badge">Section 4 · Controlled Form</p>
      <h2>Register Form</h2>
      <p>State React kiểm soát value nên validate được ngay lập tức.</p>
      <form className="form-panel" onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn" style={{ marginTop: '1rem' }}>
          Register
        </button>
      </form>
      {message && <p style={{ marginTop: '0.75rem' }}>{message}</p>}
    </section>
  );
}
