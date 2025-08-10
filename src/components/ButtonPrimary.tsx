"use client";

import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonPrimary({
  children,
  onClick,
  className = "",
}: ButtonPrimaryProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full 
        bg-white text-black 
        font-semibold 
        hover:bg-gray-200 
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}
