import React from "react";
import { useApp } from "../context/AppContext";

export default function Footer() {
  const { setActiveZone } = useApp();

  const navLinks = [
    { id: "onboarding", label: "Onboarding" },
    { id: "learn", label: "Learn Zone" },
    { id: "calculators", label: "Calculators" },
    { id: "goals", label: "Goal Planner" },
    { id: "portfolio", label: "Portfolio" },
    { id: "compounding", label: "Compounding Wow" },
    { id: "roadmap", label: "Investment Roadmap" },
    { id: "ai", label: "AI Recommender" },
  ];

  return (
    <footer className="bg-[#060B1F] border-t border-[#1E2A3A] py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-heading font-bold text-xl text-[#F5C518]">Artha Vardhan</h2>
          <p className="text-xs text-[#9CA3AF] mt-1">
            Artha Vardhan © 2026 | Built for Arthaton 2026 | AI for Finance
          </p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">
            Not SEBI registered. For educational purposes only.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-[#9CA3AF]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveZone(link.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}