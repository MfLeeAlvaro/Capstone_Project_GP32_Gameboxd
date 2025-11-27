"use client";

import React from "react";

export default function FeaturedGame() {
  return (
    <section className="mb-8 px-8">
      <h2 className="text-2xl font-bold text-white mb-4">Featured Game</h2>
      <div className="w-full h-80 rounded-lg border-2 border-purple-500 overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
          <div className="text-center z-10">
            <div className="text-6xl font-bold text-white mb-4 drop-shadow-lg">FORTNITE</div>
            <div className="text-zinc-400 text-sm">Image Placeholder</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-white text-xs text-zinc-300">
            Character in military gear, pink teddy bear, blue race car, Lego character
          </p>
        </div>
      </div>
    </section>
  );
}

