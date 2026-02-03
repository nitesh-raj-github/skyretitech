export default function Principles() {
  const principles = [
    "Clarity over complexity.",
    "Long-term thinking over short-term wins.",
    "Restraint is a feature.",
    "Design and engineering are inseparable.",
    "Quality is not negotiable.",
  ];

  return (
    <section className="bg-neutral-950 py-40 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Principles
        </h2>

        <div className="space-y-6 text-xl text-gray-400">
          {principles.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
