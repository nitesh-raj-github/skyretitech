"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/lib/content";

type Item = {
  title: string;
  description: string;
};

export default function WhatWeBuild() {
  const [intro, setIntro] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getContent("whatWeBuild").then((data) => {
      setIntro(data.intro);
      setItems(data.items);
    });
  }, []);

  return (
    <section className="bg-black py-40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white mb-6">
          What we build
        </h2>
        <p className="text-gray-400 mb-16 max-w-3xl text-lg">
          {intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400">
          {items.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-medium text-white mb-2">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
