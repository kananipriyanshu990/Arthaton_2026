import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeZone, setActiveZone] = useState("learn");

  const [onboardingDone, setOnboardingDone] = useLocalStorage("av_onboarding_done", false);
  const [monthlyIncome, setMonthlyIncome] = useLocalStorage("av_monthly_income", 25000);
  
  // FIX 3: Empty initial goals array (no pre-filled seed data)
  const [goals, setGoals] = useLocalStorage("av_goals", []);
  
  // FIX 6: Empty initial portfolio array (no pre-filled seed data)
  const [portfolio, setPortfolio] = useLocalStorage("av_portfolio", []);
  
  const [quizScores, setQuizScores] = useLocalStorage("av_quiz_scores", {});
  const [modulesRead, setModulesRead] = useLocalStorage("av_modules_read", []);
  const [riskProfile, setRiskProfile] = useLocalStorage("av_risk_profile", null);
  const [badges, setBadges] = useLocalStorage("av_badges", []);

  const markModuleAsRead = (moduleId) => {
    if (!modulesRead.includes(moduleId)) {
      setModulesRead([...modulesRead, moduleId]);
    }
  };

  const recordQuizScore = (moduleId, score) => {
    setQuizScores({ ...quizScores, [moduleId]: score });
    if (score === 5) {
      const badgeKey = `${moduleId}_expert`;
      if (!badges.includes(badgeKey)) {
        setBadges([...badges, badgeKey]);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeZone,
        setActiveZone,
        onboardingDone,
        setOnboardingDone,
        monthlyIncome,
        setMonthlyIncome,
        goals,
        setGoals,
        portfolio,
        setPortfolio,
        quizScores,
        recordQuizScore,
        modulesRead,
        markModuleAsRead,
        riskProfile,
        setRiskProfile,
        badges,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);