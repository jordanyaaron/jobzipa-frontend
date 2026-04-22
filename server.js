import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;


/**
 * =========================
 * 🌐 CORS ()
 * =========================
 */
app.use(cors({
    origin: [
      "https://jobzipa.com",
      "https://www.jobzipa.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

/**
 * =========================
 * 🔁 REDIRECT WWW → NON-WWW
 * =========================
 */
app.use((req, res, next) => {
    if (req.headers.host === "www.jobzipa.com") {
      return res.redirect(301, "https://jobzipa.com" + req.url);
    }
    next();
  });



/**
 * =========================
 * 🔥 SSR HOME + SEO
 * =========================
 */
app.get("/", (req, res) => {
  let html = fs.readFileSync(
    path.resolve("dist/index.html"),
    "utf-8"
  );

  // 🧹 remove old robots
  html = html.replace(/<meta name="robots"[^>]*>/g, "");

  // 🔥 SEO
  const seoHead = `
    <title>Latest Jobs in Tanzania, Kenya & Remote Jobs | JobZipa</title>
    <meta name="robots" content="index, follow">
    <meta name="description" content="Find verified jobs in Tanzania, Kenya and remote work." />
    <meta name="keywords" content="jobs, Tanzania jobs, Kenya jobs, remote jobs" />
    <meta property="og:title" content="JobZipa - Latest Jobs" />
  `;

  html = html.replace("</head>", `${seoHead}</head>`);

  res.send(html);
});


/**
 * =========================
 * 📦 STATIC FILES
 * =========================
 */
app.use(express.static("dist"));


/**
 * =========================
 * 🔁 SPA FALLBACK
 * =========================
 */
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

/**
 * =========================
 * 🚀 START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});