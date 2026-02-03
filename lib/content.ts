export type ContentKey =
  | "hero"
  | "philosophy"
  | "whatWeBuild"
  | "whatWeDontDo";

export async function getContent(key: ContentKey): Promise<any> {
  const content = {
    hero: {
      headline: "Designing digital products that institutions can trust.",
      subtitle: "Calm, structured, and built for the long term.",
    },

    philosophy: [
      "We value clarity over complexity.",
      "We think long-term, not launch-day.",
      "We design systems, not just screens.",
    ],

    whatWeBuild: {
      intro:
        "We design and build digital products for organizations that care about credibility and longevity.",
      items: [
        {
          title: "Institutional websites",
          description:
            "Clean, structured websites built for trust and scale.",
        },
        {
          title: "Web & mobile applications",
          description:
            "Performance-driven applications where quality is non-negotiable.",
        },
        {
          title: "Design systems",
          description:
            "Reusable foundations that keep teams aligned as products evolve.",
        },
        {
          title: "Internal tools",
          description:
            "Systems that reduce manual work and increase operational clarity.",
        },
      ],
    },

    whatWeDontDo: [
      "We don’t chase trends without purpose.",
      "We don’t rush work at the expense of quality.",
      "We don’t build without understanding the problem deeply.",
    ],
  };

  return content[key];
}
