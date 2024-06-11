"use client";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = ({ isPrecise, setIsPrecise }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const startInterval = () => {
      const delay = isPrecise ? 50 : 1000;

      const intervalID = setInterval(() => {
        setDate(new Date());
      }, delay);

      return () => clearInterval(intervalID);
    };
    startInterval();
  }, [isPrecise]);

  return (
    <div>
      {isPrecise ? date.toISOString() : date.toLocaleTimeString()}
    </div>
  )
}

export default Clock;

