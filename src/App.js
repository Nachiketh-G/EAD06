import React, { useState, useRef } from "react";
import './App.css'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h3>React Timer</h3>
      <div className="timer-display">
        <p>{formatTime(time)}</p>
      </div>
      <div className="buttons">
        {!isActive && isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handleResume}>Resume</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
