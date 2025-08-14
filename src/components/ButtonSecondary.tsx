"use client";

import React from "react";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonSecondary({
  children,
  onClick,
  className = "",
}: ButtonSecondaryProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full 
        border border-white/50 
        text-white 
        font-semibold 
        hover:bg-white/10 
        focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-opacity-75
        transition-colors duration-300
        backdrop-blur-sm
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
