import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  accentColor = "#F5C518",
  className = "",
  disabled = false,
  type = "button"
}) {
  const getStyles = () => {
    if (variant === "primary") {
      return {
        backgroundColor: accentColor,
        color: "#0A0F2C",
        fontWeight: "600",
      };
    }
    if (variant === "outline") {
      return {
        borderColor: accentColor,
        color: accentColor,
        borderWidth: "1px",
      };
    }
    return {
      backgroundColor: "transparent",
      color: "#9CA3AF",
    };
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={getStyles()}
      className={`px-5 py-2.5 rounded-[10px] text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}