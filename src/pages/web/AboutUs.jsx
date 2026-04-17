import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 text-[var(--text)]">
      <h1 className="text-2xl font-bold mb-4">About Jobzipa</h1>

      <p className="mb-3">
        Jobzipa stands for <strong>Job Zipping Arena</strong> — a digital space
        designed to bring job opportunities closer to people in a simple and
        accessible way.
      </p>

      <p className="mb-3">
        Our platform collects and displays job listings from different sources,
        helping job seekers discover opportunities quickly without unnecessary
        complexity.
      </p>

      <p className="mb-3">
        We aim to simplify job searching by making it faster, cleaner, and more
        user-friendly.
      </p>

      <p>
        Whether you're looking for remote, on-site, or hybrid roles, Jobzipa is
        built to connect you with the right opportunities.
      </p>
    </div>
  );
}