import React, { useState } from "react";
import { Info } from "lucide-react";

export default function Tooltip({ text }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block ml-1.5 align-middle">
      <button
        type="button"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setVisible(!visible)}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Info className="w-4 h-4 inline" />
      </button>
      {visible && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#1E2A3A] text-xs text-gray-200 rounded-lg shadow-2xl border border-gray-700 pointer-events-none">
          {text}
        </div>
      )}
    </div>
  );
}