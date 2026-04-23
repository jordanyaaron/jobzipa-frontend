import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const DOMAIN = "https://jobzipa.com";

/**
 * =========================
 * 🌐 CORS
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
 * 🔁 FORCE HTTPS + NON-WWW
 * =========================
 */
app.use((req, res, next) => {
  const host = req.headers.host;

  if (host === "www.jobzipa.com") {
    return res.redirect(301, DOMAIN + req.url);
  }

  // Optional: force https (Render usually handles this)
  if (req.headers["x-forwarded-proto"] === "http") {
    return res.redirect(301, DOMAIN + req.url);
  }

  next();
});

/**
 * =========================
 * 📦 STATIC FILES
 * =========================
 */
app.use(express.static("dist"));

/**
 * =========================
 * 🔥 SSR + SEO (ALL ROUTES)
 * =========================
 */
app.get("*", (req, res) => {
  const filePath = path.resolve("dist/index.html");

  if (!fs.existsSync(filePath)) {
    return res.status(500).send("Build not found");
  }

  let html = fs.readFileSync(filePath, "utf-8");

  // 🧹 Clean duplicate tags
  html = html.replace(/<meta name="robots"[^>]*>/g, "");
  html = html.replace(/<link rel="canonical"[^>]*>/g, "");

  /**
   * =========================
   * 🧠 BASIC ROUTE DETECTION
   * =========================
   */
  let title = "JobZipa - Latest Jobs";
  let description = "Find verified jobs in Tanzania, Kenya and remote work.";

  if (req.url.startsWith("/jobs")) {
    title = "Browse Jobs | JobZipa";
    description = "Explore latest job opportunities in Tanzania and remote.";
  }

  if (req.url.startsWith("/contact")) {
    title = "Contact Us | JobZipa";
    description = "Get in touch with JobZipa team.";
  }

  if (req.url.startsWith("/privacy")) {
    title = "Privacy Policy | JobZipa";
    description = "Read JobZipa privacy policy.";
  }

  if (req.url.startsWith("/about")) {
    title = "About JobZipa";
    description = "Learn more about JobZipa and how we help job seekers find opportunities.";
  }

  /**
   * =========================
   * 🔥 SEO HEAD
   * =========================
   */
  const seoHead = `
    <title>${title}</title>
    <link rel="canonical" href="${DOMAIN}${req.url}" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="${description}" />

    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${DOMAIN}${req.url}" />
    <meta property="og:type" content="website" />
  `;

  html = html.replace("</head>", `${seoHead}</head>`);

  /**
   * =========================
   * 🚨 OPTIONAL: BASIC 404 DETECTION
   * =========================
   */
  const knownRoutes = ["/", "/jobs", "/contact", "/privacy"];

  const isKnown = knownRoutes.some(route =>
    req.path === route || req.path.startsWith(route + "/")
  );

  if (!isKnown) {
    res.status(404);
  }

  res.send(html);
});

/**
 * =========================
 * 🚀 START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});