// Snowflake.js
import React, { useEffect, useState } from 'react';
import './Snowflake.css';

const Snowflake = () => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const size = Math.random() * 6 + 7;
    const left = Math.random() * 100;
    // Adjust these values to change the speed
    const minDuration = 13; // minimum duration for falling
    const maxDuration = 25; // maximum duration for falling
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;

    setStyles({
      left: `${left}vw`,
      fontSize: `${size}px`,
      animationDuration: `${duration}s`,
    });
  }, []);

  return <div className="snowflake" style={styles}>❄</div>;
};

export default Snowflake;
