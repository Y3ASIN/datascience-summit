"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="blue-gradient sm:spacey-0 flex flex-col items-center justify-center space-y-2 py-3 text-white shadow-xl sm:flex-row">
      <h1 className="mr-4 text-2xl font-bold">Opening In!</h1>
      <div className="flex items-center justify-center space-x-2 rounded-md bg-secondary p-2 text-black">
        <div className="text-center">
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <div>Days</div>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <div>Hours</div>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <div>Minutes</div>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <div>Seconds</div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
