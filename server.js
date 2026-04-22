import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * =========================
 * 🔥 STATIC FILES
 * =========================
 */
app.use(express.static("dist"));

/**
 * =========================
 * 🔥 SSR HOME + SEO INJECTION
 * =========================
 */
app.get("/", (req, res) => {
  let html = fs.readFileSync(
    path.resolve("dist/index.html"),
    "utf-8"
  );

  /**
   * =========================
   * 🧹 REMOVE OLD ROBOTS TAG (CLEAN SLATE)
   * =========================
   */
  html = html.replace(/<meta name="robots"[^>]*>/g, "");

  /**
   * =========================
   * 🔥 SEO HEAD (PRODUCTION)
   * =========================
   */
  const seoHead = `
    <title>Latest Jobs in Tanzania, Kenya & Remote Jobs | JobZipa</title>
    <meta name="robots" content="index, follow">
    <meta name="description" content="Find verified jobs in Tanzania, Kenya and remote work." />
    <meta name="keywords" content="jobs, Tanzania jobs, Kenya jobs, remote jobs" />
    <meta property="og:title" content="JobZipa - Latest Jobs" />
  `;

  /**
   * =========================
   * 🔥 INJECT SEO BEFORE </head>
   * =========================
   */
  html = html.replace("</head>", `${seoHead}</head>`);

  res.send(html);
});

/**
 * =========================
 * 🔥 SPA FALLBACK (React ROUTING)
 * =========================
 */
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

/**
 * =========================
 * 🔥 START SERVER (RENDER SAFE)
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});