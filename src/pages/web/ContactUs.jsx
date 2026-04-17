import React, { useState } from "react";
import { motion } from "framer-motion";
import contactUsIttustration from "@/assets/illustrations/contactus.png"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[var(--main-bg)]">

      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT SIDE (IMAGE + TEXT) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-col gap-4"
        >
          <img
            src={contactUsIttustration}
            alt="contact"
            className="w-full max-w-md"
          />

          <h2 className="text-2xl font-bold text-[var(--text)]">
            Get in touch with us
          </h2>

          <p className="text-[var(--placeholder)]">
            Have questions, suggestions, or business inquiries?  
            Our team is ready to help you anytime.
          </p>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-4 text-[var(--text)]">
            Contact Us
          </h1>

          <p className="mb-6 text-sm text-[var(--placeholder)]">
            Send us a message and we’ll respond as soon as possible.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="mt-6 text-sm text-[var(--placeholder)]">
            <p>📧 support@jobzipa.com</p>
            <p>🤝 info@jobzipa.com</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}