"use client";

import { useState, useEffect } from "react";

export default function Countdown({
  initialSeconds,
}: {
  initialSeconds: number;
}) {
  console.log({ initialSeconds });
  // Target: 8 hours (in seconds)
  const targetDuration = 8 * 60 * 60; // 8 hours = 28800 seconds

  const [remaining, setRemaining] = useState<number>(targetDuration);

  useEffect(() => {
    // Save a "start time" in localStorage (so it's persistent)
    const savedStart = localStorage.getItem("countdownStartTime");
    const startTime = savedStart ? parseInt(savedStart) : Date.now();

    if (!savedStart) {
      localStorage.setItem("countdownStartTime", startTime.toString());
    }

    const updateRemaining = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const timeLeft = targetDuration - elapsed;
      setRemaining(timeLeft > 0 ? timeLeft : 0);
    };

    // Update every second
    const interval = setInterval(updateRemaining, 1000);
    updateRemaining();

    return () => clearInterval(interval);
  }, [targetDuration]);

  const hrs = Math.floor(remaining / 3600);
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;

  return (
    <div className="bg-red-950 border-4 border-red-800 rounded-xl p-5 text-center shadow-2xl">
      <p className="text-red-300 text-sm font-black uppercase tracking-widest">
        EXPOSURE COUNTDOWN
      </p>
      <p className="text-6xl font-black text-red-500 font-mono mt-2">
        {hrs.toString().padStart(2, "0")}:{mins.toString().padStart(2, "0")}:
        {secs.toString().padStart(2, "0")}
      </p>
      <p className="text-red-400 text-xs mt-2 font-bold uppercase">
        TO WEST VIRGINIA & FAMILY
      </p>
    </div>
  );
}
