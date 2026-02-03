"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-neutral-950 px-6 py-40"
    >
      <div className="w-full max-w-xl">
        <div className="bg-neutral-900 border border-white/10 p-12 md:p-16">
          {sent ? (
            <p className="text-center text-lg text-gray-300">
              Message sent. We’ll respond if it’s a good fit.
            </p>
          ) : (
            <>
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Start a conversation
                </h2>
                <p className="text-gray-400 text-lg">
                  If clarity and long-term thinking matter, we should talk.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white resize-none focus:outline-none focus:border-white"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 text-center">
                    {error}
                  </p>
                )}

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white underline underline-offset-8 text-lg disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Gujarat , India · Working globally
        </p>
      </div>
    </section>
  );
}
