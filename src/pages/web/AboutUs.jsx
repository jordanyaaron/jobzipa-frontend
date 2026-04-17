import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-[var(--main-bg)]">

      {/* HERO */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[var(--text)] mb-4">
            About Jobzipa
          </h1>

          <p className="text-[var(--placeholder)] mb-4">
            <strong>Jobzipa</strong> stands for <strong>Job Zipping Arena</strong> —
            a digital space designed to simplify how people discover job opportunities.
          </p>

          <p className="text-[var(--placeholder)]">
            We bring together job listings from different sources into one clean,
            accessible platform, helping job seekers find opportunities faster and easier.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="about"
            className="w-full max-w-md"
          />
        </motion.div>

      </div>

      {/* SECTION 2 */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Our Mission",
            text: "To make job searching simple, fast, and accessible to everyone.",
          },
          {
            title: "What We Do",
            text: "We aggregate and display job opportunities in a clean and user-friendly interface.",
          },
          {
            title: "Why Jobzipa",
            text: "Because finding jobs shouldn't be complicated or time-consuming.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-lg mb-2 text-[var(--text)]">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--placeholder)]">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* SECTION 3 */}
      <div className="max-w-3xl mx-auto mt-12 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-semibold text-[var(--text)] mb-3"
        >
          Built for Job Seekers
        </motion.h2>

        <p className="text-[var(--placeholder)]">
          Whether you're searching for remote, on-site, or hybrid roles,
          Jobzipa helps you discover opportunities that match your needs —
          quickly and efficiently.
        </p>

      </div>

    </div>
  );
}