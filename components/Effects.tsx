"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// محرك الصوت باستخدام Web Audio API لتجنب الحاجة لملفات mp3 خارجية
export const playClickSound = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {
    // Handling audio restrictions
  }
};

// مكون الماوس المخصص (Custom Glowing Cursor)
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
    const zoom = 1.25;

    const x = e.clientX / zoom;
    const y = e.clientY / zoom;

    setMousePosition({ x, y });

        const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-cyan-400 bg-cyan-500/20 backdrop-blur-[1px]"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 12),
        y: mousePosition.y - (isHovered ? 24 : 12),
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        borderColor: isHovered ? "#22d3ee" : "#38bdf8",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#22d3ee]" />
    </motion.div>
  );
};

// عداد الأرقام المتزايد تلقائياً عند الفتح
export const CounterNumber = ({ targetNumber, duration = 2 }: { targetNumber: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const totalSteps = 60 * duration;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span>{count}</span>;
};