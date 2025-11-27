"use client";

import React from "react";
import GameCard from "./GameCard";

interface Game {
  title: string;
  image?: string;
}

interface GameSectionProps {
  title: string;
  games: Game[];
  borderColor?: "purple" | "blue";
}

export default function GameSection({ 
  title, 
  games, 
  borderColor = "purple" 
}: GameSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-8">{title}</h2>
      <div className="flex gap-4 overflow-x-auto px-8 pb-4 scrollbar-hide">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            image={game.image}
            borderColor={borderColor}
          />
        ))}
        <GameCard
          title="View More"
          isPlaceholder={true}
          borderColor={borderColor}
        />
      </div>
    </section>
  );
}

