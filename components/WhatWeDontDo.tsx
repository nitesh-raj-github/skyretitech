"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/lib/content";

export default function WhatWeDontDo() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    getContent("whatWeDontDo").then(setLines);
  }, []);

  return (
    <section className="bg-neutral-900 py-40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white mb-12">
          What we don’t do
        </h2>
        <div className="space-y-6 text-lg text-gray-400 max-w-3xl">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
