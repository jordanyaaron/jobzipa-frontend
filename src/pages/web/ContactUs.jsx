import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 text-[var(--text)]">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4 text-[var(--placeholder)]">
        If you have any questions, suggestions, or business inquiries, feel free
        to reach out to us.
      </p>

      <div className="space-y-2">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:support@jobzipa.com"
            className="underline"
          >
            support@jobzipa.com
          </a>
        </p>

        <p>
          📨 For partnerships and job postings:
          <br />
          info@jobzipa.com
        </p>
      </div>
    </div>
  );
}


