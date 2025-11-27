"use client";

import React from "react";

interface GameCardProps {
  title: string;
  image?: string;
  isPlaceholder?: boolean;
  borderColor?: "purple" | "blue";
}

export default function GameCard({ 
  title, 
  image, 
  isPlaceholder = false,
  borderColor = "purple" 
}: GameCardProps) {
  const borderClass = borderColor === "purple" 
    ? "border-purple-500" 
    : "border-blue-500";
  
  const bgClass = borderColor === "purple"
    ? "bg-purple-900/30"
    : "bg-blue-900/30";

  if (isPlaceholder) {
    return (
      <div className={`flex-shrink-0 w-48 h-64 rounded-lg border-2 ${borderClass} ${bgClass} flex items-end justify-center p-4`}>
        <span className="text-white text-sm">View More</span>
      </div>
    );
  }

  return (
    <div className={`flex-shrink-0 w-48 h-64 rounded-lg border-2 ${borderClass} overflow-hidden bg-zinc-900`}>
      <div className="w-full h-48 bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">
        Image Placeholder
      </div>
      <div className="p-4 bg-zinc-900">
        <h3 className="text-white text-center font-medium">{title}</h3>
      </div>
    </div>
  );
}

