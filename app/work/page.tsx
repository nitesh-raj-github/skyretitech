import Link from "next/link";

export default function WorkIndex() {
  return (
    <section className="bg-black min-h-screen px-6 py-40">
      <div className="max-w-5xl mx-auto space-y-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Selected work
        </h1>

        <Link
          href="/work/educational-platform"
          className="block border-t border-neutral-800 pt-10 space-y-4 hover:opacity-80 transition"
        >
          <h2 className="text-2xl text-white">
            Educational Platform Redesign
          </h2>

          <p className="text-sm uppercase tracking-wide text-gray-500">
            Higher education institution
          </p>

          <p className="text-lg text-gray-400 max-w-3xl">
            Redesigning a student-facing platform with a focus on clarity,
            accessibility, and long-term maintainability.
          </p>
        </Link>
      </div>
    </section>
  );
}
