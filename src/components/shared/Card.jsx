import React from "react";

export default function Card({ children, className = "", style = {} }) {
  return (
    <div
      style={{
        backgroundColor: "#111827",
        borderColor: "#1E2A3A",
        borderRadius: "16px",
        ...style
      }}
      className={`border p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}