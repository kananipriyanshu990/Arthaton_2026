import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Target, 
  PieChart, 
  TrendingUp, 
  Compass, 
  Bot, 
  Menu, 
  X 
} from "lucide-react";

const ZONES = [
  { id: "onboarding", label: "Onboarding", icon: Sparkles, accent: "#F5C518" },
  { id: "learn", label: "Learn", icon: BookOpen, accent: "#00D4FF" },
  { id: "calculators", label: "Calculators", icon: Calculator, accent: "#F5C518" },
  { id: "goals", label: "Goal Planner", icon: Target, accent: "#10B981" },
  { id: "portfolio", label: "Portfolio", icon: PieChart, accent: "#00D4FF" },
  { id: "compounding", label: "Compounding", icon: TrendingUp, accent: "#F5C518" },
  { id: "roadmap", label: "Roadmap", icon: Compass, accent: "#7C3AED" },
  { id: "ai", label: "AI Advisor", icon: Bot, accent: "#00D4FF" },
];

export default function Navbar() {
  const { activeZone, setActiveZone } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[#1E2A3A] ${
        scrolled ? "bg-[#0A0F2C]/90 backdrop-blur-md py-3 shadow-lg" : "bg-[#0A0F2C] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => setActiveZone("learn")}
          className="flex items-center gap-2 text-left group"
        >
          <span className="font-heading font-extrabold text-2xl tracking-tight text-[#F5C518]">
            Artha Vardhan
          </span>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#9CA3AF] px-2 py-0.5 rounded border border-[#1E2A3A]">
            Arthaton &apos;26
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {ZONES.map((zone) => {
            const isActive = activeZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive ? "text-[#F0EDE4]" : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                <zone.icon className="w-3.5 h-3.5" style={{ color: zone.accent }} />
                <span>{zone.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] rounded-full"
                    style={{ backgroundColor: zone.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F2C] border-b border-[#1E2A3A] px-6 py-4 space-y-2 animate-fadeIn">
          {ZONES.map((zone) => {
            const isActive = activeZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => {
                  setActiveZone(zone.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive ? "bg-[#111827] text-white" : "text-[#9CA3AF] hover:bg-[#111827]/50"
                }`}
              >
                <zone.icon className="w-4 h-4" style={{ color: zone.accent }} />
                <span>{zone.label}</span>
                {isActive && (
                  <span
                    className="ml-auto w-2 h-2 rounded-full"
                    style={{ backgroundColor: zone.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}