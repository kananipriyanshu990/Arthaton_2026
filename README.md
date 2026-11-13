# Artha Vardhan (अर्थ वर्धन) — Wealth That Grows

> **Hackathon:** Arthaton 2026 | **Theme:** AI for Finance | **Team:** Artha Vardhan | **Format:** Solo  
> **Target Audience:** Young Indians (Students, Freshers, and First Jobbers)

---

## 🌟 Project Overview & Mission

**Artha Vardhan** (*Sanskrit:* "Wealth that Grows") is an entirely passive, privacy-first, personal investment literacy and planning single-page application (SPA). Designed specifically for young Indians embarking on their financial journeys, it bridges the gap between financial jargon and practical action through interactive calculations, gamified literacy, life-stage roadmaps, and dual-mode AI advisory.

### Core Philosophy
1. **Teach first, calculate second, plan third.**
2. **No jargon without plain-language explanation.**
3. **No real money, no real APIs, no legal risk:** Zero tracking or external broker integrations.
4. **Client-Side Storage Only:** 100% of user data lives securely in browser `localStorage`.
5. **SEBI Compliance:** Categorical educational guidance only; never recommends specific mutual fund names, stock picks, or AMCs.

---

## 🛠️ Tools & Technologies Used

### AI & Prompt Engineering Workflow
- **Claude (Anthropic):** Utilized for structural blueprinting, end-to-end planning of educational module contents, formulation of SEBI-compliant financial logic, and system prompt generation.
- **Google AI Studio (Gemini 1.5 Flash):** Utilized as the code generation engine to produce all modular React components, custom mathematical hooks, and power the real-time AI Risk Profiler & Recommender in Advanced Mode.

### Technical Stack
- **Framework:** React 18 with Vite
- **Styling & Design System:** Tailwind CSS (Custom Dark Navy `#0A0F2C` palette with zone-specific accent tokens)
- **Interactive Visualizations:** Recharts (Area, Line, Bar, and Pie Charts)[cite: 2]
- **Icons:** Lucide React[cite: 2]
- **Animations:** Framer Motion & CSS 3D transforms (Myth Busters card flip)[cite: 2]
- **State Management & Persistence:** React Context API + Custom `useLocalStorage` synchronization hooks[cite: 2]

---

## 🎨 Global Design System

The app runs on a dark, distraction-free navy foundation with dedicated neon and jewel accent colors for each functional zone[cite: 2]:

- **Base Background:** `#0A0F2C` (Deep Navy)[cite: 2]
- **Card Background:** `#111827`[cite: 2]
- **Border / Divider:** `#1E2A3A`[cite: 2]
- **Primary Text:** `#F0EDE4` (Off-white)[cite: 2]
- **Secondary Text:** `#9CA3AF` (Muted grey)[cite: 2]

### Zone Accent Color Palette
| Zone | Title | Accent Hex |
| :--- | :--- | :--- |
| **Zone 1** | First Salary Onboarding | `#F5C518` (Gold) / `#FFAA00` (Warm Amber) |
| **Zone 2** | Learn Zone | `#00D4FF` (Electric Cyan) |
| **Zone 3** | Calculators | `#F5C518` (Gold) & `#00D4FF` (Cyan) |
| **Zone 4** | Goal Planner | `#10B981` (Emerald Green) |
| **Zone 5** | Portfolio Tracker | `#00D4FF` (Growth) / `#EF4444` (Loss) |
| **Zone 6** | Compounding Wow Screen | `#F5C518` on `#0D2B1D` Gradient |
| **Zone 7** | Investment Roadmap | `#7C3AED` (Soft Purple) |
| **Zone 8** | AI Risk Profiler & Recommender | `#00D4FF` (Cyan) & `#FFAA00` (Amber Disclaimer) |

---

## 🧭 Comprehensive Breakdown of All 8 Zones & Tabs

### Zone 1: First Salary Onboarding (`#F5C518` / `#FFAA00`)
Triggered automatically on first visit and skippable after Step 1[cite: 2]. Guides a fresher through understanding their paycheck[cite: 2]:
- **Step 1 — Welcome:** Inspirational introduction to active money management[cite: 2].
- **Step 2 — Income Input:** Safe, private numerical input for monthly salary or pocket money[cite: 2].
- **Step 3 — The Split (50/30/20 Rule):** Visual bar breakdown dividing income into 50% Needs (Rent, Food, Bills), 30% Wants (Entertainment, Dining), and 20% Savings & Investments[cite: 2].
- **Step 4 — The Nudge:** Calculates future value of their 20% savings compounded at 12% over 10 years, accompanied by an interactive area chart showing invested cash versus compound gains[cite: 2].

### Zone 2: Learn Zone (`#00D4FF`)
The central financial literacy repository structured into three sub-tabs[cite: 2]:
1. **Learning Modules:** 8 comprehensive, jargon-free guides covering[cite: 2]:
   - *Why Invest At All?* (Inflation math, FD vs. Equity Index comparison)[cite: 2]
   - *What is a Mutual Fund?* (Pooling concept, fund manager role, NAV, category types)[cite: 2]
   - *SIP vs. Lumpsum* (Rupee cost averaging, market timing myths)[cite: 2]
   - *Understanding Risk* (Volatility vs. permanent capital loss, time horizon defense)[cite: 2]
   - *CAGR, NAV, and Expense Ratio* (The NAV cheapness fallacy, impact of TER on 25-year returns)[cite: 2]
   - *ELSS and Tax Saving* (Section 80C deductions, 3-year lock-in comparison against PPF/FD)[cite: 2]
   - *Index Funds* (Nifty 50, Sensex, passive vs. active SPIVA statistics)[cite: 2]
   - *Power of Compounding* (The exponential hockey stick curve, starting early)[cite: 2]
2. **Myth Busters:** 8 interactive 3D-flip cards that contrast popular financial fallacies with verified market facts upon click or tap[cite: 2].
3. **Jargon Dictionary:** Searchable glossary of 28 core terms (AUM, CAGR, Corpus, ELSS, NAV, XIRR, etc.) featuring instant gold match highlights[cite: 2].
4. **Modular Quizzes:** 5 MCQs per module (40 total) with instant color-coded feedback, scoring, and unlockable *"Artha Expert"* achievement badges[cite: 2].

### Zone 3: High-Precision Investment Calculators (`#F5C518` & `#00D4FF`)
Mathematical engines featuring real-time interactive Recharts visualizations[cite: 2]:
- **SIP Calculator:** Calculates future wealth using the exact monthly formula `M = P × ({[1 + r]^n – 1} / r) × (1 + r)` with slider controls[cite: 2].
- **Lumpsum Calculator:** Projects one-time compounding using `A = P × (1 + r/100)^t`[cite: 2].
- **Dual-Mode CAGR Calculator:** Mode 1 computes annualized percentage return from beginning and ending values; Mode 2 projects future values using a target CAGR[cite: 2].
- **Inflation Adjuster:** Calculates purchasing power loss and future equivalent costs over time based on user-defined inflation rates[cite: 2].
- **ELSS Tax Saver:** Compares Old Regime tax brackets (FY 2025–26) with and without Section 80C deductions, with informational guidance regarding the New Tax Regime[cite: 2].
- **What-If Simulator:** Compares baseline SIPs against dynamic life events: step-up increases, pause periods, rate shifts, and lump sum injections[cite: 2].

### Zone 4: Reverse Goal Planner (`#10B981`)
Allows users to plan up to 10 financial milestones (e.g., Higher Studies, First Car, Emergency Fund, House Downpayment)[cite: 2]:
- **Auto-assigned Emojis:** Keyword detection tags goals automatically (✈️ Travel, 🎓 Education, 🛡️ Emergency, 🏠 Home)[cite: 2].
- **Reverse Calculation:** Solves for required monthly SIP based on target date, inflation, and existing savings[cite: 2].
- **Full CRUD Capabilities:** Add, edit, update, and delete goals with persistent `localStorage` synchronization[cite: 2].
- **Empty State:** Thoughtful call to action when no goals have been created yet[cite: 2].

### Zone 5: Passive Portfolio Tracker (`#00D4FF` / `#EF4444`)
A zero-API, completely private manual ledger[cite: 2]:
- **Asset Management:** Log equity funds, index funds, debt, ELSS, PPF, and FDs with purchase date, invested principal, and current valuation[cite: 2].
- **Full CRUD Support:** Dedicated edit modal to update existing investments without creating duplicates[cite: 2].
- **Analytics:** Absolute return (₹ and %), annualized CAGR since investment date, best performer highlights, and allocation breakdown via Recharts Pie Chart[cite: 2].
- **Future Projection:** Multi-year compounding projections (1, 3, 5, 10 years) at target returns[cite: 2].
- **Text Export:** Generates and downloads a clean, formatted `.txt` portfolio summary report[cite: 2].

### Zone 6: Compounding "Wow" Screen (`#F5C518` on `#0D2B1D`)
A dramatic, shareable visualization demonstrating the mathematical paradox of early compounding[cite: 2]:
- **The Classic Comparison:** Person A (invests ₹500/mo from age 18 to 25 only = ₹42,000 total) vs. Person B (invests ₹500/mo from age 25 to 60 = ₹2,10,000 total)[cite: 2]. Demonstrates how Person A accumulates nearly identical wealth at age 60 while investing 5x less capital[cite: 2].
- **Interactive "Cost of Waiting" Counter:** Users enter their age and monthly SIP to see the exact monetary loss incurred by postponing investing by just 5 years[cite: 2].

### Zone 7: Investment Roadmap (`#7C3AED`)
A vertical timeline displaying a 6-stage lifecycle path from Age 18 to 50+[cite: 2]:
1. **Stage 1 (18–22):** *Foundation* (Emergency fund, KYC, ₹500 index SIPs)[cite: 2]
2. **Stage 2 (22–25):** *Acceleration* (Step-up SIP, 80C ELSS, avoiding lifestyle inflation)[cite: 2]
3. **Stage 3 (25–30):** *Diversification* (International exposure, NPS, annual rebalancing)[cite: 2]
4. **Stage 4 (30–40):** *Growth* (20–30% income allocation, term/health covers, education goals)[cite: 2]
5. **Stage 5 (40–50):** *Consolidation* (Shift toward hybrid debt, PPF/EPF maximization)[cite: 2]
6. **Stage 6 (50+):** *Preservation* (Capital defense, SWP retirement withdrawals)[cite: 2]
- **Interactive Pin:** Entering an age dynamically highlights the user's active life stage with a gold *"YOU ARE HERE"* marker[cite: 2].

### Zone 8: AI Risk Profiler & Recommender (`#00D4FF` & `#FFAA00`)
Features a dual-mode toggle catering to both offline environments and live AI generation[cite: 2]:
- **10-Question Behavioral Assessment:** Scores risk tolerance from 10 to 40 across Conservative, Moderate, Moderately Aggressive, and Aggressive tiers[cite: 2].
- **Mode 1 — Simple Mode (Default / 100% Offline):** Evaluates score instantly without internet or API keys using four pre-written expert templates[cite: 2].
- **Mode 2 — Advanced Mode (Live Gemini 1.5 Flash API):** Prompts for a Google AI Studio API key via a password-type input[cite: 2]. The key is held strictly in local React state, never stored in `localStorage` or `sessionStorage`, and is wiped upon tab switch or component unmount[cite: 2]. The Gemini API analyzes answers to return personality analysis, category recommendations, and customized warnings[cite: 2].
- **Mandatory Amber Disclaimer:** Persistent SEBI-compliant educational disclosures displayed before and after quiz completion[cite: 2].

---

## 🗄️ LocalStorage Data Schema

All user records are persisted locally in the browser.

## ⚖️ Regulatory Compliance & Disclaimer

Artha Vardhan is an educational literacy platform and is not registered with the Securities and Exchange Board of India (SEBI) as an investment advisor or research entity. All financial calculators, asset allocation suggestions, and AI-generated outputs are intended solely for simulation and conceptual learning. Users must consult a certified financial advisor before deploying actual capital into financial markets.


### Built for Arthaton 2026 under the AI for Finance hackathon theme
