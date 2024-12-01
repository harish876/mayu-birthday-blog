import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BIRTHDAY_DATE = new Date("2024-12-03T00:00:00+05:30");

function calculateTimeLeft() {
  const difference = +BIRTHDAY_DATE - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <motion.span
          className="text-4xl font-bold"
          key={timeLeft[interval]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft[interval]}
        </motion.span>
        <span className="text-sm text-muted-foreground">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center space-x-4 p-4 w-fit bg-inherit rounded-lg shadow-lg">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Happy Birthday Mayuuuuuuuu!</span>
      )}
    </div>
  );
}
