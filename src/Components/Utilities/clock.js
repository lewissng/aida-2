import React, { useEffect, useState } from 'react';
import './clock.scss';

const Clock = () => {

  const [time, setTime] = useState(new Date());

  const clock = () => {
    setTime(new Date());
  }

  const realTime = () => {
    setInterval(
      () => clock(), 1000
    )
  }

  useEffect(() => {
    realTime();
    return () => {
      clearInterval(realTime)
    };
  }
  );

  return (
    <div>
      <h2>The time is now: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;