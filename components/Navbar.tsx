"use client";

import React from "react";

interface NavbarProps {
  displayName: string;
  xp: number;
  discoveredCount: number;
  levelName: string;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = ["home", "about", "experience", "skills", "projects", "contact"];

export const Navbar: React.FC<NavbarProps> = ({
  displayName,
  xp,
  discoveredCount,
  levelName,
  activeSection,
  onNavigate,
}) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl bg-slate-950/70 backdrop-blur-md border border-slate-800/80 rounded-full py-2 px-4 shadow-xl shadow-cyan-950/20 flex items-center justify-between transition-all">
      {/* Brand & Gamification Badge */}
      <div className="flex items-center space-x-3 pl-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5">
            <span className="font-extrabold tracking-widest text-white text-xs sm:text-sm">{displayName}</span>
            <span className="text-[10px] font-mono text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded-full">
              {xp} XP
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-[9px] text-slate-400 font-mono">
            <span className="text-cyan-300">[{discoveredCount}/7]</span>
            <span className="hidden sm:inline uppercase text-slate-500 font-medium tracking-tight">{levelName}</span>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item;
          return (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`capitalize px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
};