// components/Countdown.tsx
"use client";

import { useState, useEffect } from "react";

export default function Countdown({
  initialSeconds,
}: {
  initialSeconds: number;
}) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

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
