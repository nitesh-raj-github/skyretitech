import Link from "next/link";

export default function Work() {
  const engagements = [
    {
      title: "Educational Platform Redesign",
      slug: "/work/educational-platform",
      context: "Higher education institution",
      focus: "Product structure, interface clarity, and accessibility",
      outcome:
        "Created a calmer, more navigable platform designed for long-term academic use.",
    },
    {
      title: "Internal Operations System",
      context: "Growing organization",
      focus: "Workflow simplification and internal tooling",
      outcome:
        "Replaced fragmented manual processes with a single, reliable internal system.",
    },
    {
      title: "Early-Stage Product Foundation",
      context: "Startup team",
      focus: "Product thinking, design system, and technical direction",
      outcome:
        "Established a scalable foundation to support future development and growth.",
    },
  ];

  return (
    <section className="bg-black py-40 px-6">
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Selected engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our work
          </h2>
        </div>

        <div className="space-y-20">
          {engagements.map((item, index) => (
            <div
              key={index}
              className="border-t border-neutral-800 pt-10 space-y-4"
            >
              <h3 className="text-2xl font-medium text-white">
                {item.slug ? (
                  <Link
                    href={item.slug}
                    className="hover:opacity-80 transition"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>

              <p className="text-sm uppercase tracking-wide text-gray-500">
                {item.context}
              </p>

              <p className="text-lg text-gray-400 max-w-3xl">
                <span className="text-gray-500">Focus:</span> {item.focus}
              </p>

              <p className="text-gray-500 max-w-3xl">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
