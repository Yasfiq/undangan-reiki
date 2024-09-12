import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("2024-10-12T09:00:00").getTime(); // Set target waktu countdown

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownDate]);

  return (
    <div className="flex justify-center items-center font-holyfriday text-white text-center space-x-2 md:space-x-5">
      <div className="md:w-24 md:h-24 w-20 h-20 flex flex-col justify-center items-center border-2 border-white rounded-full">
        <span className="text-sm md:text-2xl font-bold">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="md:w-24 md:h-24 w-20 h-20 flex flex-col justify-center items-center border-2 border-white rounded-full">
        <span className="text-sm md:text-2xl font-bold">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="md:w-24 md:h-24 w-20 h-20 flex flex-col justify-center items-center border-2 border-white rounded-full">
        <span className="text-sm md:text-2xl font-bold">
          {timeLeft.minutes}
        </span>
        <span className="label">Minutes</span>
      </div>
      <div className="md:w-24 md:h-24 w-20 h-20 flex flex-col justify-center items-center border-2 border-white rounded-full">
        <span className="text-sm md:text-2xl font-bold">
          {timeLeft.seconds}
        </span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
