import React, { useState, useEffect } from 'react';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const radius = 150;
  const x = radius + radius * Math.sin((time.getSeconds() / 60) * 2 * Math.PI);
  const y = radius - radius * Math.cos((time.getSeconds() / 60) * 2 * Math.PI);
  const secondHandStyle = {
    position: 'absolute',
    left: `${radius}px`,
    top: `${radius}px`,
    width: '2px',
    height: `${radius}px`,
    transform: `rotate(${(time.getSeconds() / 60) * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    background: 'red',
  };

  const minuteHandStyle = {
    position: 'absolute',
    left: `${radius}px`,
    top: `${radius}px`,
    width: '4px',
    height: `${radius * 0.8}px`,
    transform: `rotate(${(time.getMinutes() / 60) * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    background: 'black',
  };

  const hourHandStyle = {
    position: 'absolute',
    left: `${radius}px`,
    top: `${radius}px`,
    width: '6px',
    height: `${radius * 0.6}px`,
    transform: `rotate(${(time.getHours() / 12) * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    background: 'black',
  };

  const hourLabels = [];
  for (let i = 1; i <= 12; i++) {
    const x = radius + radius * 0.8 * Math.sin((i / 12) * 2 * Math.PI);
    const y = radius - radius * 0.8 * Math.cos((i / 12) * 2 * Math.PI);
    hourLabels.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${x - 5}px`,
          top: `${y - 5}px`,
          width: '10px',
          height: '10px',
          fontSize: '10px',
          textAlign: 'center',
          fontFamily: '"Digital-7 Mono", monospace',
          color: '#777',
        }}
      >
        {i}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      {hourLabels}
      <div style={secondHandStyle} />
      <div style={minuteHandStyle} />
      <div style={hourHandStyle} />
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          fontFamily: '"Digital-7 Mono", monospace',
          color: '#777',
        }}
      >
        {time.toLocaleString('en-US', { timeZone: 'Europe/Paris' })}
      </div>
    </div>
  );
}

export default AnalogClock;

