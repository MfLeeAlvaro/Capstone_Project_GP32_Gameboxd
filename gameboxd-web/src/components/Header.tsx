"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black border-b border-zinc-800">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-white">GAMEBOXD</h1>
        <nav className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400">
            <span>Home</span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          </Link>
          <Link href="/search" className="text-white hover:text-purple-400">
            Search
          </Link>
          <Link href="/logs" className="text-white hover:text-purple-400">
            Logs
          </Link>
          <Link href="/feed" className="text-white hover:text-purple-400">
            Feed
          </Link>
          <Link href="/profile" className="text-white hover:text-purple-400">
            Profile
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center text-white hover:bg-purple-500/20">
          🔔
        </button>
        <button className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center text-white hover:bg-purple-500/20">
          ⚙️
        </button>
      </div>
    </header>
  );
}

