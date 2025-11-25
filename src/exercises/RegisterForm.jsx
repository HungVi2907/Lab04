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
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 4 · Controlled Form</h2>
      <form onSubmit={handleSubmit}>
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
          style={{ marginLeft: '0.5rem' }}
        />
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Register
        </button>
      </form>
      {message && <p style={{ marginTop: '0.75rem' }}>{message}</p>}
    </section>
  );
}
