import React, { Suspense, lazy } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded functional zones for optimized bundle performance as required in Section 16.8
const Onboarding = lazy(() => import("./zones/Onboarding/Onboarding"));
const LearnZone = lazy(() => import("./zones/LearnZone/LearnZone"));
const Calculators = lazy(() => import("./zones/Calculators/Calculators"));
const GoalPlanner = lazy(() => import("./zones/GoalPlanner/GoalPlanner"));
const Portfolio = lazy(() => import("./zones/Portfolio/Portfolio"));
const CompoundingWow = lazy(() => import("./zones/CompoundingWow/CompoundingWow"));
const InvestmentRoadmap = lazy(() => import("./zones/Roadmap/InvestmentRoadmap"));
const AIRecommender = lazy(() => import("./zones/AIRecommender/AIRecommender"));

function MainContent() {
  const { activeZone, onboardingDone } = useApp();

  // If first-time user and onboarding not completed, render Onboarding automatically
  const shouldRenderOnboarding = !onboardingDone || activeZone === "onboarding";

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Suspense
        fallback={
          <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#F5C518] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-gray-400">Loading Artha Vardhan...</p>
          </div>
        }
      >
        {shouldRenderOnboarding && <Onboarding />}
        {!shouldRenderOnboarding && activeZone === "learn" && <LearnZone />}
        {!shouldRenderOnboarding && activeZone === "calculators" && <Calculators />}
        {!shouldRenderOnboarding && activeZone === "goals" && <GoalPlanner />}
        {!shouldRenderOnboarding && activeZone === "portfolio" && <Portfolio />}
        {!shouldRenderOnboarding && activeZone === "compounding" && <CompoundingWow />}
        {!shouldRenderOnboarding && activeZone === "roadmap" && <InvestmentRoadmap />}
        {!shouldRenderOnboarding && activeZone === "ai" && <AIRecommender />}
      </Suspense>
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div className="bg-[#0A0F2C] min-h-screen text-[#F0EDE4] selection:bg-[#F5C518] selection:text-[#0A0F2C]">
        <Navbar />
        <MainContent />
      </div>
    </AppProvider>
  );
}