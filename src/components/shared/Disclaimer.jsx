import React from "react";
import { AlertTriangle } from "lucide-react";

/**
 * Standard SEBI educational disclaimer component as specified in Section 12.1
 * Amber #FFAA00 with 15% opacity background, 1px border.
 */
export default function Disclaimer({ className = "" }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 170, 0, 0.15)",
        borderColor: "#FFAA00",
      }}
      className={`border rounded-xl p-4 flex items-start gap-3 text-amber-300 text-sm ${className}`}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 text-[#FFAA00] mt-0.5" />
      <div className="leading-relaxed">
        <p className="font-semibold text-[#FFAA00]">Educational Disclaimer</p>
        <p className="text-gray-200 mt-1">
          ⚠️ This tool is for educational purposes only. Artha Vardhan is not a SEBI-registered investment advisor. 
          Please consult a certified financial advisor before making actual investment decisions.
        </p>
      </div>
    </div>
  );
}