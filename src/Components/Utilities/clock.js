import React, { useState } from 'react';
import './clock.scss';
import useClock from '../../CustomHooks/useClock';

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

  useClock(realTime);

  /* useEffect(() => {
    realTime();
    return () => {
      clearInterval(realTime)
    };
  }
  ); */

  return (
    <div>
      <h2>The time is now: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;