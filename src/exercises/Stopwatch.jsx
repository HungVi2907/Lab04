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
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 2 · useRef</h2>
      <h3>Time: {seconds}s</h3>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop} style={{ marginLeft: '0.5rem' }}>
        Stop
      </button>
      <button type="button" onClick={handleReset} style={{ marginLeft: '0.5rem' }}>
        Reset
      </button>
    </section>
  );
}
