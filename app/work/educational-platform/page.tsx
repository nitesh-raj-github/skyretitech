export default function EducationalPlatformCaseStudy() {
  return (
    <article className="bg-black px-6 py-40">
      <div className="max-w-3xl mx-auto space-y-20 text-gray-400 text-lg">

        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Educational Platform Redesign
          </h1>

          <p className="text-sm uppercase tracking-wide text-gray-500">
            Higher education institution
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Context</h2>
          <p>
            The institution relied on a legacy platform used daily by students
            and faculty. Over time, the system became difficult to navigate,
            inconsistent in behavior, and costly to maintain.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Challenge</h2>
          <p>
            The challenge was not to redesign everything, but to bring clarity
            without disrupting existing academic workflows. Accessibility,
            performance, and long-term maintainability were critical constraints.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Our approach</h2>
          <p>
            We worked closely with stakeholders to understand daily usage
            patterns. Rather than introducing visual novelty, we focused on
            reducing cognitive load and establishing a consistent system of
            interaction.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Key decisions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Simplified navigation and information hierarchy</li>
            <li>Designed for accessibility from the start</li>
            <li>Introduced a reusable design system</li>
            <li>Reduced visual noise in favor of clarity</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Outcome</h2>
          <p>
            The redesigned platform provided a calmer, more predictable
            experience for students and staff. The internal team gained a
            maintainable system that could evolve over time without repeated
            redesigns.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white">Reflection</h2>
          <p>
            This project reinforced the importance of restraint. In environments
            where users rely on software daily, clarity and reliability matter
            more than novelty.
          </p>
        </section>
      </div>
    </article>
  );
}
