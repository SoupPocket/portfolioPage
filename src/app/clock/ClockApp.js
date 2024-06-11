"use client";
import React, { useState, useEffect } from 'react';
import Clock from './Clock.js';

const ClockApp = () => {
  const [visibility, setVisibility] = useState(false);
  const [isPrecise, setIsPrecise] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const togglePreciseMode = () => {
    setIsPrecise(!isPrecise);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4'
        onClick={toggleVisibility}
      >
        {visibility ? 'Hide Clock' : 'Show Clock'}
      </button>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
        onClick={togglePreciseMode}
      >
        {isPrecise ? 'Disable Precise Mode' : 'Enable Precise Mode'}
      </button>
      {visibility && (
        <div className='mt-8'>
          <Clock isPrecise={isPrecise} time={time} />
        </div>
      )}
    </div>
  );
};

export default ClockApp;
