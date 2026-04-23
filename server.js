import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const DOMAIN = "https://jobzipa.com";

/**
 * =========================
 * 🌐 CORS CONFIG
 * =========================
 */
app.use(cors({
  origin: [
    "https://jobzipa.com",
    "https://www.jobzipa.com",
    "https://prototype.jobzipa.com",
    "https://jobzipa-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/**
 * =========================
 * 🔁 FORCE WWW → NON-WWW
 * =========================
 */
app.use((req, res, next) => {
  const host = req.headers.host;

  if (host === "www.jobzipa.com") {
    return res.redirect(301, DOMAIN + req.url);
  }

  next();
});


/**
 * =========================
 * 🔥 SEO ROUTE (OPTIONAL SSR FOR HOME)
 * =========================
 */
app.get("/", (req, res) => {
  const filePath = path.join(process.cwd(), "dist/index.html");

  if (!fs.existsSync(filePath)) {
    return res.status(500).send("Build not found");
  }

  let html = fs.readFileSync(filePath, "utf-8");

  html = html.replace(/<meta name="robots"[^>]*>/g, "");

  const seoHead = `
    <title>JobZipa - Latest Jobs in Tanzania & Remote Jobs</title>
    <link rel="canonical" href="${DOMAIN}/" />

    <meta name="robots" content="index, follow" />
    <meta name="description" content="Find verified job opportunities in Tanzania, Kenya and remote work on JobZipa." />

    <meta property="og:title" content="JobZipa - Latest Jobs" />
    <meta property="og:description" content="Find verified job opportunities in Tanzania, Kenya and remote work." />
    <meta property="og:url" content="${DOMAIN}/" />
    <meta property="og:type" content="website" />
  `;

  html = html.replace("</head>", `${seoHead}</head>`);

  res.send(html);
});

/**
 * =========================
 * 📦 STATIC FILES (REACT BUILD)
 * =========================
 * MUST BE FIRST before any fallback routes
 */
app.use(express.static(path.join(process.cwd(), "dist")));


/**
 * =========================
 * 🔁 SPA FALLBACK (MUST BE LAST)
 * =========================
 */
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"));
});

/**
 * =========================
 * 🚀 START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});