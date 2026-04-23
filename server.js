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
 * 🔥 SEO + SSR (ALL ROUTES)
 * =========================
 */
app.get(/(.*)/, (req, res) => {
  const filePath = path.join(process.cwd(), "dist/index.html");

  if (!fs.existsSync(filePath)) {
    return res.status(500).send("Build not found");
  }

  let html = fs.readFileSync(filePath, "utf-8");

  /**
   * =========================
   * 🧹 CLEAN DUPLICATES
   * =========================
   */
  html = html.replace(/<meta name="robots"[^>]*>/g, "");
  html = html.replace(/<link rel="canonical"[^>]*>/g, "");

  /**
   * =========================
   * 🧠 ROUTE-BASED SEO
   * =========================
   */
  let title = "JobZipa - Latest Jobs in Tanzania & Remote Jobs";
  let description =
    "Find verified job opportunities in Tanzania, Kenya and remote work on JobZipa.";

  const pathName = req.path;

  if (pathName.startsWith("/about")) {
    title = "About JobZipa";
    description = "Learn about JobZipa and our mission to connect job seekers.";
  }

  if (pathName.startsWith("/contact")) {
    title = "Contact JobZipa";
    description = "Get in touch with JobZipa support team.";
  }

  if (pathName.startsWith("/privacy")) {
    title = "Privacy Policy | JobZipa";
    description = "Read how JobZipa handles user privacy and data.";
  }

  /**
   * =========================
   * 🔥 SEO HEAD INJECTION
   * =========================
   */
  const seoHead = `
    <title>${title}</title>
    <link rel="canonical" href="${DOMAIN}${req.url}" />

    <meta name="robots" content="index, follow" />
    <meta name="description" content="${description}" />

    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${DOMAIN}${req.url}" />
    <meta property="og:type" content="website" />
  `;

  html = html.replace("</head>", `${seoHead}</head>`);

  /**
   * =========================
   * 🚀 RESPONSE
   * =========================
   */
  res.status(200).send(html);
});



/**
 * =========================
 * 📦 STATIC FILES (REACT BUILD)
 * =========================
 */
app.use(express.static(path.join(process.cwd(), "dist")));
/**
 * =========================
 * 🚀 START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});