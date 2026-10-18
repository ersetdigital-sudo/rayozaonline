"use client";

import { useEffect, useState } from "react";
import { pad } from "@/lib/utils";

export default function FlashCountdown() {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    let end = 0;
    try {
      end = Number(localStorage.getItem("nxEnd")) || 0;
    } catch {
      end = 0;
    }

    if (end < Date.now()) {
      end = Date.now() + 5 * 3600 * 1000 + 23 * 60 * 1000;
      try {
        localStorage.setItem("nxEnd", String(end));
      } catch {
        /* storage unavailable */
      }
    }

    const tick = () => {
      const total = Math.max(0, end - Date.now()) / 1000 | 0;
      setTime({
        h: pad((total / 3600) | 0),
        m: pad(((total % 3600) / 60) | 0),
        s: pad(total % 60),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex gap-3 md:justify-end">
      <div className="card px-4 py-3 text-center min-w-[78px]">
        <div className="fh text-4xl font-extrabold">{time.h}</div>
        <div className="muted text-xs">Jam</div>
      </div>
      <div className="card px-4 py-3 text-center min-w-[78px]">
        <div className="fh text-4xl font-extrabold">{time.m}</div>
        <div className="muted text-xs">Menit</div>
      </div>
      <div className="card px-4 py-3 text-center min-w-[78px] border-[#2B5288]">
        <div className="fh text-4xl font-extrabold or">{time.s}</div>
        <div className="muted text-xs">Detik</div>
      </div>
    </div>
  );
}
