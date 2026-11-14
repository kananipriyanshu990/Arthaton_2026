/**
 * Quizzes for each of the 8 educational modules (5 MCQs per module = 40 total).
 */
export const MODULE_QUIZZES = {
  module_1: [
    {
      q: "If inflation is 6% per annum and your savings account earns 3%, what happens to your money?",
      options: ["Your purchasing power increases", "Your purchasing power decreases every year", "Your money stays exactly equal in value", "You beat the stock market"],
      correct: 1,
      explanation: "Since inflation (6%) exceeds savings interest (3%), you lose 3% in real purchasing power annually."
    },
    {
      q: "What is the primary difference between saving and investing?",
      options: ["Saving is for stocks, investing is for gold", "Saving locks money for 50 years", "Saving protects short-term liquidity; investing grows wealth above inflation", "There is no difference"],
      correct: 2,
      explanation: "Saving ensures safety and immediate cash, while investing commits money to productive assets to generate long-term real gains."
    },
    {
      q: "Over a 10-year horizon, ₹10,000 in an Indian equity index fund at 12% historically reaches approx:",
      options: ["₹12,000", "₹18,771", "₹31,058", "₹1,00,000"],
      correct: 2,
      explanation: "Using the formula 10,000 * (1 + 0.12)^10, the total compounds to roughly ₹31,058."
    },
    {
      q: "Why is an FD (Fixed Deposit) vulnerable over long durations?",
      options: ["Banks usually shut down", "Post-tax FD returns struggle to beat long-term lifestyle inflation", "FDs cannot be liquidated", "Interest rates are always zero"],
      correct: 1,
      explanation: "After deducting slab-rate income taxes, FD returns hover around 4.5%-5.5%, which barely offsets 6% inflation."
    },
    {
      q: "What should you build before committing money to long-term equity investing?",
      options: ["A cryptocurrency trading portfolio", "A luxury watch collection", "An emergency fund covering 3-6 months of expenses", "A real estate down payment"],
      correct: 2,
      explanation: "An emergency buffer ensures you never have to break your equity investments during an unexpected life emergency."
    }
  ],
  module_2: [
    {
      q: "What is the core concept behind a Mutual Fund?",
      options: ["Borrowing money from a bank to trade crypto", "Pooling capital from many investors to invest in a diversified basket", "Purchasing lottery tickets collectively", "A government grant for startups"],
      correct: 1,
      explanation: "Mutual funds aggregate small contributions from thousands of people to build diversified portfolios."
    },
    {
      q: "Who is responsible for managing the investments inside a mutual fund scheme?",
      options: ["The Reserve Bank Governor", "The mutual fund distributors", "A certified professional Fund Manager and research team", "The algorithm of the stock exchange"],
      correct: 2,
      explanation: "Asset Management Companies appoint professional fund managers and analysts to steer portfolios."
    },
    {
      q: "What does NAV stand for in mutual funds?",
      options: ["Net Annual Value", "New Asset Valuation", "Net Asset Value", "National Asset Verification"],
      correct: 2,
      explanation: "NAV stands for Net Asset Value, representing the unit book price of a fund scheme."
    },
    {
      q: "Which fund category invests predominantly in government securities and corporate debt?",
      options: ["Equity Fund", "Debt Fund", "Commodity Fund", "Sector Fund"],
      correct: 1,
      explanation: "Debt funds allocate capital to fixed income instruments like treasury bills and corporate bonds."
    },
    {
      q: "What is a Hybrid mutual fund?",
      options: ["A fund that runs on electric cars", "A fund that combines both equity stocks and fixed income debt", "A fund that trades foreign currencies only", "An unregistered private club"],
      correct: 1,
      explanation: "Hybrid funds hold a blend of equity (growth) and debt (stability)."
    }
  ],
  module_3: [
    {
      q: "What is Rupee Cost Averaging in SIP?",
      options: ["Buying more units when markets drop and fewer when markets rise", "Paying higher fees each month", "Fixing the rupee exchange rate against the dollar", "A tax deduction loophole"],
      correct: 0,
      explanation: "Because your monthly SIP amount is constant, you automatically accumulate more units during market crashes."
    },
    {
      q: "When does a Lumpsum investment generally make sense?",
      options: ["When you have zero savings", "When you receive a windfall/bonus and have a long horizon with stomach for volatility", "Every Monday morning", "Only when markets are at all-time highs"],
      correct: 1,
      explanation: "Lumpsum makes sense when you have sudden liquid capital (bonus, inheritance) and a minimum 5-7 year horizon."
    },
    {
      q: "Why is SIP universally recommended for students and fresh jobbers?",
      options: ["It mandates no KYC", "It instills a pay-yourself-first discipline and requires low initial capital", "It promises guaranteed 50% returns", "It is only open to people under 25"],
      correct: 1,
      explanation: "SIP removes timing friction and allows freshers to build regular wealth habits from their monthly pay."
    },
    {
      q: "What is the minimum typical amount to initiate an SIP in India?",
      options: ["₹10,000", "₹5,000", "₹100 to ₹500", "₹50,000"],
      correct: 2,
      explanation: "Modern Indian mutual funds allow SIPs starting at just ₹100 to ₹500/month."
    },
    {
      q: "What should you do with your SIP when the stock market corrects by 15%?",
      options: ["Stop the SIP and withdraw everything", "Continue the SIP uninterrupted to accumulate cheaper units", "Call the police", "Double your credit card debt"],
      correct: 1,
      explanation: "Market corrections are sales opportunities where your SIP accumulates units at discount NAVs."
    }
  ],
  module_4: [
    {
      q: "How should an intelligent investor view short-term market volatility?",
      options: ["As a scam to be avoided", "As the regular admission price for superior long-term compounding", "As a sign to sell all stocks", "As proof that FDs are better"],
      correct: 1,
      explanation: "Volatility is standard behavior in equity markets; patience converts volatility into compounding gains."
    },
    {
      q: "Which asset class historically has higher volatility but superior long-term inflation-beating potential?",
      options: ["Savings Account", "Treasury Bills", "Equity Mutual Funds", "Overnight Debt Funds"],
      correct: 2,
      explanation: "Equity shares fluctuate more in the short term, but consistently beat inflation over 7-10+ years."
    },
    {
      q: "How does lengthening your investment time horizon impact equity risk?",
      options: ["It increases risk exponentially", "It substantially reduces the probability of negative returns", "It has zero impact on risk", "It guarantees bank failure"],
      correct: 1,
      explanation: "Historical Nifty data proves rolling 7+ year holding windows yield virtually zero negative return periods."
    },
    {
      q: "If you need money for college tuition in 8 months, where should you NOT put it?",
      options: ["Liquid Fund", "Bank Fixed Deposit", "High-beta Small Cap Equity Fund", "High-interest savings account"],
      correct: 2,
      explanation: "Money needed within 1-2 years should never be exposed to volatile equity markets."
    },
    {
      q: "What is the true definition of financial risk?",
      options: ["Daily price fluctuation on a screen", "Permanent destruction or loss of your hard-earned capital", "Not checking your account every hour", "Having diversified assets"],
      correct: 1,
      explanation: "Permanent loss of purchasing power is real risk; normal price volatility is temporary."
    }
  ],
  module_5: [
    {
      q: "What does CAGR measure that simple average returns distort?",
      options: ["The exact tax slab of the investor", "The smoothed year-on-year geometric growth rate over a period", "The bank branch opening hours", "The dividend yield of gold"],
      correct: 1,
      explanation: "CAGR captures real compounding by factoring in year-over-year gains and losses."
    },
    {
      q: "Fund X has an NAV of ₹20 and Fund Y has an NAV of ₹200. Which fund is cheaper?",
      options: ["Fund X", "Fund Y", "Neither — NAV does not indicate cheapness or valuation", "Fund X is 10 times better"],
      correct: 2,
      explanation: "NAV is simply the per unit book value. Both will generate identical ₹ gains if their portfolios grow by the same percentage."
    },
    {
      q: "What is the Total Expense Ratio (TER)?",
      options: ["The tax paid on withdrawal", "The annual percentage fee charged by the AMC to operate the fund", "The cost of phone internet", "A penalty for early exit"],
      correct: 1,
      explanation: "TER is the annual management and administrative fee deducted daily from the fund's NAV."
    },
    {
      q: "Why should young investors actively choose Direct Plans over Regular Plans?",
      options: ["Direct plans are exempt from all taxes", "Direct plans exclude distributor commissions, ensuring lower TER and higher long-term corpus", "Direct plans give free movie tickets", "Regular plans are banned by SEBI"],
      correct: 1,
      explanation: "Direct plans bypass intermediary commissions, saving up to 0.5% - 1.5% annually which compounds to lakhs over decades."
    },
    {
      q: "If an investment of ₹10,000 grows to ₹14,400 in 2 years, its CAGR is:",
      options: ["44%", "20%", "22%", "14.4%"],
      correct: 1,
      explanation: "√(14400 / 10000) - 1 = √1.44 - 1 = 1.20 - 1 = 20% CAGR."
    }
  ],
  module_6: [
    {
      q: "What does ELSS stand for?",
      options: ["Electronic Loan and Savings Scheme", "Equity Linked Savings Scheme", "Everyday Life Safety System", "Equity Long-term Systematic Stock"],
      correct: 1,
      explanation: "ELSS stands for Equity Linked Savings Scheme, an equity fund with Section 80C tax benefits."
    },
    {
      q: "What is the mandatory lock-in period for ELSS mutual funds?",
      options: ["1 year", "3 years", "5 years", "15 years"],
      correct: 1,
      explanation: "ELSS boasts the shortest lock-in (3 years) among all Section 80C tax-saving options."
    },
    {
      q: "What is the maximum investment eligible for tax deduction under Section 80C (Old Regime)?",
      options: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹2,50,000"],
      correct: 2,
      explanation: "Section 80C caps eligible tax deductions at ₹1,50,000 per financial year."
    },
    {
      q: "How does the lock-in of ELSS compare with PPF (Public Provident Fund)?",
      options: ["ELSS has 3 years lock-in vs PPF's 15 years", "PPF has 3 years vs ELSS 15 years", "Both have 5 years", "Neither has any lock-in"],
      correct: 0,
      explanation: "PPF locks funds for 15 years, whereas ELSS unlocks each installment after 3 years."
    },
    {
      q: "Are Section 80C ELSS deductions available under the New Income Tax Regime?",
      options: ["Yes, up to ₹3 Lakhs", "No, the New Tax Regime foregoes 80C deductions for lower slab rates", "Only for government employees", "Only if you invest before March 31"],
      correct: 1,
      explanation: "The New Tax Regime does not offer 80C deductions, though ELSS remains a viable wealth creation vehicle."
    }
  ],
  module_7: [
    {
      q: "What does the Nifty 50 index represent?",
      options: ["The 50 richest people in India", "The top 50 large-cap bluechip stocks listed on the National Stock Exchange", "50 government banks", "A list of penny stocks"],
      correct: 1,
      explanation: "The Nifty 50 tracks the 50 largest and most liquid Indian corporations across key economic sectors."
    },
    {
      q: "What is the primary operational advantage of an Index Fund?",
      options: ["It promises a 100% bonus every Diwali", "Very low expense ratio because it passively mirrors the index without active manager fees", "It can never fall in value", "It pays out monthly physical cash"],
      correct: 1,
      explanation: "Index funds track benchmarks passively, keeping management expenses near rock-bottom (0.1% - 0.3%)."
    },
    {
      q: "What does SPIVA research consistently indicate about active fund managers over 10-year periods?",
      options: ["100% of active fund managers beat the market", "A large majority (70-80%+) fail to outperform their benchmark index after fees", "Active fund managers always double your money", "Index funds always underperform debt funds"],
      correct: 1,
      explanation: "After deducting active management fees and trading friction, most active large-cap funds lag behind simple index funds."
    },
    {
      q: "If India's GDP and corporate sector expands over the next 20 years, an Indian Index fund will:",
      options: ["Collapse to zero", "Naturally mirror and participate in that macroeconomic expansion", "Freeze all transactions", "Convert into a fixed deposit"],
      correct: 1,
      explanation: "Index funds hold the economic pillars of the country, directly capturing India's growth."
    },
    {
      q: "Sensex represents the benchmark index of which stock exchange?",
      options: ["National Stock Exchange (NSE)", "Bombay Stock Exchange (BSE)", "New York Stock Exchange (NYSE)", "London Stock Exchange (LSE)"],
      correct: 1,
      explanation: "The Sensex is the benchmark index of the Bombay Stock Exchange (BSE), comprising 30 prominent stocks."
    }
  ],
  module_8: [
    {
      q: "Why did Albert Einstein famously call Compounding the 'Eighth Wonder of the World'?",
      options: ["Because it was carved into stone", "Because those who understand it earn it, and those who don't pay it", "Because it only applies to physics", "Because it doubles money every week"],
      correct: 1,
      explanation: "Compounding reinvests returns to generate future returns, leading to exponential growth over time."
    },
    {
      q: "What is the shape of a compound growth graph over a 30-year timeframe?",
      options: ["Flat horizontal line", "Downwards curve", "Hockey-stick / exponential curve", "A jagged circle"],
      correct: 2,
      explanation: "Growth starts quietly in early years before exploding upwards exponentially in later decades."
    },
    {
      q: "Person A invests ₹500/mo from age 18 to 25 and stops. Person B invests ₹500/mo from 25 to 60. Who invested less total cash?",
      options: ["Person A invested 5x less money", "Person B invested less", "Both invested the exact same amount", "Neither invested any cash"],
      correct: 0,
      explanation: "Person A invested ₹42,000 total. Person B invested ₹2,10,000 total (5 times more cash)."
    },
    {
      q: "In long-term compounding, which single variable has the greatest mathematical leverage?",
      options: ["The broker you use", "The time duration (number of compounding years)", "The day of the week you invest", "Checking the news daily"],
      correct: 1,
      explanation: "Time is an exponent in the compounding equation ($P(1+r)^t$), giving it dramatic mathematical power."
    },
    {
      q: "What is the biggest enemy of compounding for young investors?",
      options: ["Starting with a modest sum like ₹500", "Procrastination and waiting 5-10 years before starting", "Investing in low-cost index funds", "Reinvesting dividends"],
      correct: 1,
      explanation: "Every year delayed permanently wipes out the massive outer years of the compounding hockey stick."
    }
  ]
};