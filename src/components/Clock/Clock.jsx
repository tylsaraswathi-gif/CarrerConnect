import { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="clock-card">
      <h3>🕒 Current Time</h3>
      <h1>{currentTime}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Clock;