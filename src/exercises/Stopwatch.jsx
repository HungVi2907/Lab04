import { useRef, useState } from 'react';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  return (
    <section>
      <p className="badge">Section 2 · useRef</p>
      <h2>Stopwatch</h2>
      <div className="panel" style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '3rem', fontWeight: 700 }}>{seconds}s</p>
        <small style={{ color: 'var(--text-muted)' }}>Interval ID lưu bằng useRef nên không gây re-render.</small>
      </div>
      <div className="button-row">
        <button type="button" className="btn" onClick={handleStart}>
          Start
        </button>
        <button type="button" className="btn secondary" onClick={handleStop}>
          Stop
        </button>
        <button type="button" className="btn secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}
