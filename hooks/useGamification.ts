"use client";

import { useState, useEffect } from "react";

export interface ToastMessage {
  id: string;
  title: string;
  subtitle?: string;
}

const LEVEL_TIERS = [
  { minXp: 0, title: "NEWBIE TRACE" },
  { minXp: 50, title: "CLOUD EXPLORER" },
  { minXp: 100, title: "DEVOPS APPRENTICE" },
  { minXp: 200, title: "INFRASTRUCTURE BUILDER" },
  { minXp: 300, title: "CLOUD ENGINEER" },
];

export function useGamification() {
  const [xp, setXp] = useState<number>(0);
  const [discoveredMilestones, setDiscoveredMilestones] = useState<string[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load state on mount
  useEffect(() => {
    const savedXp = localStorage.getItem("ys_portfolio_xp");
    const savedMilestones = localStorage.getItem("ys_portfolio_milestones");
    
    if (savedXp) setXp(parseInt(savedXp, 10));
    if (savedMilestones) setDiscoveredMilestones(JSON.parse(savedMilestones));

    // Initial visit bonus
    addXp(5, "Interaction", "Opening the website", "initial_visit");
  }, []);

  const addXp = (amount: number, title: string, subtitle?: string, actionKey?: string) => {
    if (actionKey) {
      const recordedActions = JSON.parse(localStorage.getItem("ys_portfolio_actions") || "[]");
      if (recordedActions.includes(actionKey)) return;
      localStorage.setItem("ys_portfolio_actions", JSON.stringify([...recordedActions, actionKey]));
    }

    setXp((prev) => {
      const newXp = prev + amount;
      localStorage.setItem("ys_portfolio_xp", newXp.toString());
      return newXp;
    });

    const toastId = Math.random().toString();
    setToasts((prev) => [...prev, { id: toastId, title: `+${amount} XP: ${title}`, subtitle }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 4500);
  };

  const discoverMilestone = (milestoneId: string) => {
    if (!discoveredMilestones.includes(milestoneId)) {
      const updated = [...discoveredMilestones, milestoneId];
      setDiscoveredMilestones(updated);
      localStorage.setItem("ys_portfolio_milestones", JSON.stringify(updated));
    }
  };

  const getCurrentLevel = () => {
    let current = LEVEL_TIERS[0].title;
    for (const tier of LEVEL_TIERS) {
      if (xp >= tier.minXp) current = tier.title;
    }
    return current;
  };

  return {
    xp,
    addXp,
    discoveredCount: discoveredMilestones.length,
    discoverMilestone,
    levelName: getCurrentLevel(),
    toasts,
  };
}