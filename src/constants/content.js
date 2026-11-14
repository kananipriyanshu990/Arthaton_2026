/**
 * Educational modules, myth busters, and jargon dictionary contents.
 * Written specifically with zero filler/lorem-ipsum.
 */

export const MODULES_DATA = [
  {
    id: "module_1",
    title: "1. Why Invest At All?",
    readTime: "3 min",
    summary: "Why keeping all your money in a savings bank account slowly destroys your wealth.",
    content: [
      {
        heading: "The Invisible Thief: Inflation",
        body: "If a plate of Biryani costs ₹150 today and general inflation is 6% per annum, the same meal will cost ₹268 in 10 years. A regular savings account pays around 3% interest, which means after taxes you actually lose purchasing power every single year."
      },
      {
        heading: "Saving vs. Investing",
        body: "Saving is parking money for protection and short-term liquidity. Investing is putting your money into productive assets (businesses, debt instruments, land) so that your money works for you and outpaces inflation."
      },
      {
        heading: "Real Case: ₹10,000 in Fixed Deposit vs Equity Mutual Fund (10 Years)",
        body: "₹10,000 kept in an FD generating 6.5% turns into approximately ₹18,771 in 10 years. That same ₹10,000 invested in a broad-market Indian Index Fund returning a historic average of 12% compounds into ₹31,058 — over 65% more real wealth with zero extra physical labor."
      }
    ]
  },
  {
    id: "module_2",
    title: "2. What is a Mutual Fund?",
    readTime: "4 min",
    summary: "How mutual funds pool collective capital and allow even ₹100 to own India's biggest companies.",
    content: [
      {
        heading: "The Collective Pot Concept",
        body: "Imagine you and 1,000 friends each put in ₹500. You now have a massive war-chest of ₹5,00,000. On your own, you couldn't buy expensive individual company shares or corporate debentures, but collectively, you can own a diversified basket."
      },
      {
        heading: "The Role of the Fund Manager",
        body: "A SEBI-registered Asset Management Company (AMC) appoints professional portfolio managers and research teams to track market trends, review company balance sheets, and rebalance the pool."
      },
      {
        heading: "Net Asset Value (NAV) Made Simple",
        body: "NAV is the total value of all stocks and bonds owned by the fund, minus operational costs, divided by the total number of units issued. It is simply the unit price of a mutual fund."
      },
      {
        heading: "The 4 Core Categories",
        body: "Equity Funds (stocks: high growth, high volatility), Debt Funds (government and corporate bonds: stable, lower return), Hybrid Funds (balance of both), and Index Funds (passively mirrors Nifty 50 or Sensex)."
      }
    ]
  },
  {
    id: "module_3",
    title: "3. SIP vs Lumpsum",
    readTime: "3 min",
    summary: "Systematic discipline vs one-time investment: why beginners should almost always pick SIP.",
    content: [
      {
        heading: "What is a Systematic Investment Plan (SIP)?",
        body: "A SIP is an automated recurring instruction where a fixed sum (e.g. ₹500 or ₹5,000) is deducted monthly from your bank account and invested into your chosen mutual fund regardless of whether market sentiment is euphoric or fearful."
      },
      {
        heading: "The Magic of Rupee Cost Averaging",
        body: "When the market crashes, fund NAVs drop, so your ₹1,000 buys MORE units. When the market surges, your ₹1,000 buys FEWER units. Over several years, your average acquisition cost remains low without ever needing to predict the market bottom."
      },
      {
        heading: "Why SIP Wins for First-Salary Earners",
        body: "Freshers rarely have ₹5,00,000 sitting idle. SIP turns investing into a disciplined monthly habit just like paying rent or phone bills, eliminating emotional timing mistakes completely."
      }
    ]
  },
  {
    id: "module_4",
    title: "4. Understanding Risk",
    readTime: "4 min",
    summary: "Volatility is the price of admission. Learn how time in the market neutralizes short-term dips.",
    content: [
      {
        heading: "Risk is Not the Enemy",
        body: "Avoiding risk entirely by hoarding cash is a guaranteed loss through inflation. Real investment risk is the permanent destruction of capital, whereas short-term market fluctuation is simply volatility."
      },
      {
        heading: "The Risk vs Return Spectrum",
        body: "Overnight & Liquid Debt Funds have low volatility and low returns (~6-7%). Large-Cap Equity has moderate volatility and solid returns (~11-13%). Small-Cap Equity experiences severe 30-40% swings but has historically generated outsized growth over 7+ years."
      },
      {
        heading: "Time Horizon Neutralizes Risk",
        body: "Historically in the Nifty 50 index, any holding period exceeding 7 years has virtually zero probability of delivering negative returns. The longer you can leave your money untouched, the more equity risk vanishes."
      }
    ]
  },
  {
    id: "module_5",
    title: "5. CAGR, NAV, and Expense Ratio",
    readTime: "4 min",
    summary: "The essential metrics every investor must know to evaluate fund performance and hidden drag.",
    content: [
      {
        heading: "Compounded Annual Growth Rate (CAGR)",
        body: "Markets don't move in a straight line. If you start with ₹10,000, drop to ₹8,000 in Year 1, and surge to ₹15,000 in Year 3, average returns can be deceptive. CAGR smooths out the journey and tells you the exact constant annual rate your money grew at."
      },
      {
        heading: "The NAV Fallacy: Low NAV does NOT mean Cheap",
        body: "A fund with NAV of ₹20 is not 'cheaper' than a fund with NAV of ₹200. If both fund portfolios hold companies that rise 15% this year, your ₹10,000 investment grows to ₹11,500 in both! Don't judge funds by NAV."
      },
      {
        heading: "Total Expense Ratio (TER): The Silent Cut",
        body: "The AMC deducts an annual management fee. A 1% difference in TER might sound tiny, but compounded over 25 years, it can erode up to 20-25% of your final accumulated corpus. Always prefer Direct Plans over Regular Plans to cut distributor commissions."
      }
    ]
  },
  {
    id: "module_6",
    title: "6. ELSS and Tax Saving",
    readTime: "3 min",
    summary: "How to save taxes under Section 80C while building long-term equity wealth.",
    content: [
      {
        heading: "What is ELSS?",
        body: "Equity Linked Savings Schemes (ELSS) are diversified equity mutual funds eligible for tax deductions under Section 80C of the Indian Income Tax Act (Old Tax Regime), allowing deductions up to ₹1,50,000 per financial year."
      },
      {
        heading: "The Shortest Lock-In Period",
        body: "Unlike Public Provident Fund (PPF) with a 15-year lock-in or Tax-Saving Bank FDs with a 5-year lock-in, ELSS has a mandatory lock-in of only 3 years. This lock-in also prevents you from panicking and selling during short corrections."
      },
      {
        heading: "Old vs New Regime Perspective",
        body: "Under the New Tax Regime, 80C deductions are not permitted. However, ELSS remains an exceptional wealth-building equity vehicle due to its discipline and diversified equity exposure."
      }
    ]
  },
  {
    id: "module_7",
    title: "7. Index Funds",
    readTime: "3 min",
    summary: "Why buying the entire Indian economy beats 80% of active human fund managers.",
    content: [
      {
        heading: "What is an Index?",
        body: "The Nifty 50 is a benchmark basket containing the top 50 bluechip companies in India (TCS, Reliance, HDFC Bank, Infosys, etc.) across 13 sectors. When India's economy expands, these companies represent the vanguard of that growth."
      },
      {
        heading: "Passive Investing vs Active Speculation",
        body: "An index fund doesn't pay a manager to pick hot stocks. It simply mirrors the exact weights of the index automatically. As a result, its expense ratio is minuscule (often 0.1% to 0.2% vs 1.5% for active funds)."
      },
      {
        heading: "The SPIVA Reality",
        body: "Global and Indian SPIVA studies repeatedly show that over a 5 to 10 year window, more than 70-80% of actively managed large-cap mutual funds fail to beat their benchmark index after accounting for management fees."
      }
    ]
  },
  {
    id: "module_8",
    title: "8. Power of Compounding",
    readTime: "4 min",
    summary: "Albert Einstein's eighth wonder of the world: how interest earns interest to create hockey sticks.",
    content: [
      {
        heading: "Linear vs Exponential Growth",
        body: "Simple interest grows like a ladder (₹1,000 gives ₹100 each year). Compound interest grows like a snowball rolling down the Himalayas. The returns of year 1 are reinvested, so in year 2 you earn returns on your initial capital PLUS your accumulated profit."
      },
      {
        heading: "The Snowball Curve (The Hockey Stick)",
        body: "In the first 5 years of an SIP, the gains feel deceptively small. Between years 10 and 20, the returns start dwarfing your actual monthly contributions. By year 25, over 80% of your total net worth is composed of pure compound interest!"
      },
      {
        heading: "Time Beats Capital",
        body: "A person who invests ₹2,000/month from age 20 to 30 and never adds another rupee will often end up with MORE money at age 60 than someone who starts investing ₹5,000/month at age 35 until 60."
      }
    ]
  }
];

export const MYTH_BUSTERS = [
  {
    id: 1,
    myth: "Mutual funds are very risky and you can lose all your money.",
    truth: "Mutual funds aren't just equity stocks. Debt mutual funds invest in safe government bonds and treasury bills. Risk is tied to the underlying asset, not the mutual fund structure itself."
  },
  {
    id: 2,
    myth: "I need a large corpus of ₹25,000 to ₹50,000 to start investing.",
    truth: "You can start an SIP in Indian mutual funds with as little as ₹100 or ₹500 a month. Consistency matters infinitely more than starting capital."
  },
  {
    id: 3,
    myth: "Bank Fixed Deposits are always safer and better than mutual funds.",
    truth: "FDs offer safety of nominal principal, but post-tax inflation destroys your real purchasing power. Over a 10-year period, FDs actually lose real value."
  },
  {
    id: 4,
    myth: "A mutual fund with a lower NAV of ₹12 is cheaper than one with ₹150.",
    truth: "NAV is simply the per-unit book value, not a stock valuation ratio like P/E. A ₹1,000 investment in a ₹10 NAV fund grows at the exact same rate as a ₹100 NAV fund if their underlying portfolios rise by 10%."
  },
  {
    id: 5,
    myth: "I should wait for the next market crash to time my entry.",
    truth: "Decades of financial research prove that 'Time IN the market beats TIMING the market.' Waiting on the sidelines often means missing out on the biggest upward compounding days."
  },
  {
    id: 6,
    myth: "I will start investing later once my monthly salary increases.",
    truth: "Delaying your investments by just 5 years can cost you tens of lakhs in compound interest later. Starting with ₹500 today beats waiting to invest ₹5,000 five years from now."
  },
  {
    id: 7,
    myth: "Mutual fund returns are guaranteed by the government.",
    truth: "Mutual funds are market-linked instruments and never offer guaranteed returns. Returns fluctuate with economic and corporate growth."
  },
  {
    id: 8,
    myth: "I need an expensive agent or broker to buy mutual funds.",
    truth: "You can invest directly in 'Direct Plans' through official AMC websites or regulated modern apps with zero commission fees."
  }
];

export const JARGON_TERMS = [
  { term: "AUM", definition: "Assets Under Management. The total market value of all investments and client capital managed by a mutual fund or financial institution." },
  { term: "CAGR", definition: "Compound Annual Growth Rate. The smoothed annual rate at which an investment grows over multiple years assuming profits are reinvested." },
  { term: "Corpus", definition: "The total accumulated pile of wealth or capital targeted for a milestone (e.g. retirement corpus, wedding corpus)." },
  { term: "Debt Fund", definition: "A mutual fund category that invests in fixed-income securities like government bonds, corporate debentures, and commercial paper for stability." },
  { term: "Diversification", definition: "Spreading your investments across different assets and sectors so that a crash in one company or sector does not wipe out your portfolio." },
  { term: "ELSS", definition: "Equity Linked Savings Scheme. An equity mutual fund eligible for tax deduction up to ₹1.5 Lakh under Section 80C with a 3-year lock-in." },
  { term: "Equity", definition: "Ownership shares in a company. Investing in equity funds means you own fractional pieces of businesses and participate in their profits." },
  { term: "Expense Ratio", definition: "The annual percentage fee charged by the Asset Management Company to cover fund manager salaries, operations, and management." },
  { term: "FD", definition: "Fixed Deposit. A financial instrument provided by banks that yields a fixed interest rate on capital locked for a predetermined duration." },
  { term: "Fund Manager", definition: "A certified finance professional responsible for implementing an investment fund's strategy and managing its portfolio trading activities." },
  { term: "Hybrid Fund", definition: "A mutual fund that automatically splits its portfolio between both equity stocks and debt bonds to blend growth with safety." },
  { term: "Index Fund", definition: "A passive mutual fund designed to replicate the exact holdings and performance of a financial market index like Nifty 50 or Sensex." },
  { term: "Inflation", definition: "The rate at which the general level of prices for goods and services rises, eroding purchasing power over time." },
  { term: "KYC", definition: "Know Your Customer. A mandatory one-time verification process using PAN and Aadhaar required by SEBI before you can invest in India." },
  { term: "Lumpsum", definition: "Investing your entire available capital at one single point in time, rather than spreading it across monthly installments." },
  { term: "NAV", definition: "Net Asset Value. The per-share value of a mutual fund calculated by dividing the total net assets by the number of outstanding units." },
  { term: "Nifty 50", definition: "The benchmark stock market index of the National Stock Exchange of India (NSE), tracking the 50 largest Indian companies." },
  { term: "PPF", definition: "Public Provident Fund. A government-backed, 15-year guaranteed savings scheme with sovereign safety and tax-free interest." },
  { term: "Portfolio", definition: "The comprehensive collection of all financial assets (stocks, bonds, cash, gold, real estate) owned by an individual." },
  { term: "Rebalancing", definition: "The practice of periodically buying or selling portions of your portfolio to restore your original target asset allocation." },
  { term: "Returns", definition: "The net financial gain or loss made on an investment, expressed as a monetary figure or percentage of invested principal." },
  { term: "Risk", definition: "The probability of experiencing an outcome different from the expected return, specifically capital loss or extended drawdowns." },
  { term: "Rupee Cost Averaging", definition: "The automatic advantage of SIP: buying more units when prices fall and fewer when prices rise, lowering average cost over time." },
  { term: "Sensex", definition: "The benchmark index of the Bombay Stock Exchange (BSE), reflecting the performance of 30 well-established Indian bluechip corporations." },
  { term: "SIP", definition: "Systematic Investment Plan. A method of investing a predetermined fixed sum at regular monthly or quarterly intervals into a mutual fund." },
  { term: "Step-up SIP", definition: "An automated feature allowing you to periodically increase your monthly SIP installment (e.g. +10% annually) in tandem with salary hikes." },
  { term: "TER", definition: "Total Expense Ratio. The overall operational cost incurred to manage a mutual fund scheme, reflected as an annualized percentage." },
  { term: "Volatility", definition: "The rate and extent to which an asset's price swings up and down over a given short or medium-term time window." },
  { term: "XIRR", definition: "Extended Internal Rate of Return. The true annualized rate of return for a series of multiple cash inflows and outflows at varying dates." }
];