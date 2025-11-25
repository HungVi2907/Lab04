import { useInput } from '../hooks/useInput';

export default function InputPlayground() {
  const email = useInput('');
  const password = useInput('');
  const nickname = useInput('');
  const submittedText = email.value && password.value ? `Account ready for ${email.value}` : 'Fill the form';

  const handleReset = () => {
    email.reset();
    password.reset();
    nickname.reset();
  };

  return (
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 7 · Custom Hook</h2>
      <p>{submittedText}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '320px' }}>
        <input type="email" placeholder="Email" value={email.value} onChange={email.onChange} />
        <input type="password" placeholder="Password" value={password.value} onChange={password.onChange} />
        <input type="text" placeholder="Nickname" value={nickname.value} onChange={nickname.onChange} />
      </div>
      <button type="button" onClick={handleReset} style={{ marginTop: '0.75rem' }}>
        Reset
      </button>
    </section>
  );
}
