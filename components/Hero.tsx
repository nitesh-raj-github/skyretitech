"use client";

import HeroScene from "./three/HeroScene";


export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      {/* 3D sculpture */}
      <div className="w-full max-w-6xl">
        <HeroScene />
      </div>

      {/* Copy */}
      <div className="max-w-5xl text-center space-y-8 mt-16">
        <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight">
          Designing digital products
          <br /> institutions can trust
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Calm, structured, and built for the long term.
        </p>

        <a
          href="#contact"
          className="inline-block text-white underline underline-offset-8 text-lg"
        >
          Start a conversation
        </a>
      </div>
    </section>
  );
}
