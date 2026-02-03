"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/lib/content";

export default function Philosophy() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    getContent("philosophy").then(setLines);
  }, []);

  if (!lines.length) return null;

  return (
    <section className="bg-white py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">How we think</h2>
        <div className="space-y-6 text-lg text-gray-600">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
