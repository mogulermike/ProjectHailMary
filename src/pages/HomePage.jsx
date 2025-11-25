// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';

// March 20, 2026 @ midnight (local time)
const targetDate = new Date('2026-03-20T08:00:00');

const secondsPerMinute = 60;
const secondsPerHour = 60 * secondsPerMinute;
const secondsPerDay = 24 * secondsPerHour;

function getTimeLeft() {
  const now = new Date();
  const diffMs = targetDate - now;

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / secondsPerDay);
  const hours = Math.floor((totalSeconds % secondsPerDay) / secondsPerHour);
  const minutes = Math.floor(
    (totalSeconds % secondsPerHour) / secondsPerMinute
  );
  const seconds = totalSeconds % secondsPerMinute;

  return { days, hours, minutes, seconds, done: false };
}

function pad2(value) {
  return value.toString().padStart(2, '0');
}

export default function HomePage() {
  const [t, setT] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const content = `${pad2(t.days)}D ${pad2(t.hours)}H ${pad2(
    t.minutes
  )}M ${pad2(t.seconds)}S`;

  return (
    <div className='countdown-strip'>
      <h1 className='countdown-text'>{content}</h1>
    </div>
  );
}
