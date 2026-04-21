import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const PORT = 3000;

/**
 * =========================
 * 🔥 SSR HOME (SAHIHI)
 * =========================
 */
app.get("/", (req, res) => {
    let html = fs.readFileSync(
      path.resolve("dist/index.html"),
      "utf-8"
    );
  
    const seoHead = `
      <title>Latest Jobs in Tanzania, Kenya & Remote Jobs | JobZipa</title>
      <meta name="description" content="Find verified jobs in Tanzania, Kenya and remote work." />
      <meta name="keywords" content="jobs, Tanzania jobs, Kenya jobs, remote jobs" />
      <meta property="og:title" content="JobZipa - Latest Jobs" />
    `;
  
    html = html.replace("</head>", `${seoHead}</head>`);
  
    res.send(html);
  });

/**
 * =========================
 * 🔥 STATIC FILES
 * =========================
 */
app.use(express.static("dist"));

/**
 * =========================
 * 🔥 SPA FALLBACK
 * =========================
 */
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

/**
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});