import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getAllRoutesMeta } from "../src/seo/routeMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist");

async function prerender() {
  console.log("🚀 Starting build-time prerendering for Zoravia Terra Journeys...");

  if (!fs.existsSync(distDir)) {
    console.error("❌ dist directory not found. Please run 'vite build' first.");
    process.exit(1);
  }

  const templatePath = path.resolve(distDir, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  // Create Vite SSR environment to execute JSX and React components in Node
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
    const routesMeta = getAllRoutesMeta();
    const routeKeys = Object.keys(routesMeta);

    console.log(`📄 Found ${routeKeys.length} public indexable routes to prerender.`);

    for (const route of routeKeys) {
      const meta = routesMeta[route];
      console.log(`  → Prerendering: ${route}`);

      const { html: renderedAppHtml } = render(route);

      if (!renderedAppHtml || renderedAppHtml.trim().length === 0) {
        console.warn(`  ⚠️ Warning: rendered HTML for ${route} was empty!`);
      }

      // Build SEO meta tags block
      const headTags = [
        `<title>${escapeHtml(meta.title)}</title>`,
        `<link rel="canonical" href="${meta.canonical}" />`,
        `<meta name="description" content="${escapeHtml(meta.description)}" />`,
        `<meta property="og:title" content="${escapeHtml(meta.ogTitle || meta.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(meta.ogDescription || meta.description)}" />`,
        `<meta property="og:url" content="${meta.canonical}" />`,
        `<meta property="og:image" content="${meta.ogImage}" />`,
        `<meta property="og:type" content="${meta.ogType || "website"}" />`,
        `<meta property="og:site_name" content="Zoravia Terra Journeys" />`,
        `<meta name="twitter:card" content="${meta.twitterCard || "summary_large_image"}" />`,
        `<meta name="twitter:title" content="${escapeHtml(meta.ogTitle || meta.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(meta.ogDescription || meta.description)}" />`,
        `<meta name="twitter:image" content="${meta.ogImage}" />`,
      ];

      if (meta.jsonLd) {
        headTags.push(
          `<script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`
        );
      }

      // Replace template title, description, canonical with route-specific SEO tags
      let pageHtml = template;

      // Strip existing default title, canonical, and description from template
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, "");
      pageHtml = pageHtml.replace(/<link rel="canonical"[^>]*\/?>/i, "");
      pageHtml = pageHtml.replace(/<meta name="description"[^>]*\/?>/i, "");

      // Insert new SEO tags right before </head>
      pageHtml = pageHtml.replace("</head>", `  ${headTags.join("\n    ")}\n</head>`);

      // Inject rendered React DOM into #root
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedAppHtml}</div>`
      );

      // Determine output file path
      let outFilePath;
      if (route === "/") {
        outFilePath = path.resolve(distDir, "index.html");
      } else {
        const routePathClean = route.startsWith("/") ? route.slice(1) : route;
        const routeDir = path.resolve(distDir, routePathClean);
        fs.mkdirSync(routeDir, { recursive: true });
        outFilePath = path.resolve(routeDir, "index.html");
      }

      fs.writeFileSync(outFilePath, pageHtml, "utf-8");
    }

    // Prerender 404.html with noindex for Apache ErrorDocument 404
    console.log("  → Prerendering custom 404.html");
    const { html: notFoundHtml } = render("/404-not-found-page");
    const notFoundHeadTags = [
      `<title>Page Not Found | Zoravia Terra Journeys</title>`,
      `<meta name="robots" content="noindex, nofollow" />`,
      `<meta name="description" content="The page you are looking for does not exist on Zoravia Terra Journeys." />`,
    ];

    let notFoundPageHtml = template;
    notFoundPageHtml = notFoundPageHtml.replace(/<title>.*?<\/title>/i, "");
    notFoundPageHtml = notFoundPageHtml.replace(/<link rel="canonical"[^>]*\/?>/i, "");
    notFoundPageHtml = notFoundPageHtml.replace(/<meta name="description"[^>]*\/?>/i, "");
    notFoundPageHtml = notFoundPageHtml.replace(
      "</head>",
      `  ${notFoundHeadTags.join("\n    ")}\n</head>`
    );
    notFoundPageHtml = notFoundPageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${notFoundHtml}</div>`
    );
    fs.writeFileSync(path.resolve(distDir, "404.html"), notFoundPageHtml, "utf-8");

    // Ensure sitemap.xml, robots.txt, and .htaccess exist in dist
    copyFileIfMissing(path.resolve(root, "public", "sitemap.xml"), path.resolve(distDir, "sitemap.xml"));
    copyFileIfMissing(path.resolve(root, "public", "robots.txt"), path.resolve(distDir, "robots.txt"));
    copyFileIfMissing(path.resolve(root, "public", ".htaccess"), path.resolve(distDir, ".htaccess"));

    console.log("✅ Build-time prerendering completed successfully!");
  } finally {
    await vite.close();
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function copyFileIfMissing(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
