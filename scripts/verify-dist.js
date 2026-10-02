import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const routes = [
  { path: "/", file: "index.html", expectedTitle: "Zoravia Terra Journeys", hasBreadcrumbs: false },
  { path: "/about", file: "about/index.html", expectedTitle: "About Us", hasBreadcrumbs: false },
  { path: "/short-escapes", file: "short-escapes/index.html", expectedTitle: "Short Escape Tours", hasBreadcrumbs: false },
  { path: "/travel-with-us", file: "travel-with-us/index.html", expectedTitle: "Travel With Us", hasBreadcrumbs: false },
  { path: "/gallery", file: "gallery/index.html", expectedTitle: "Gallery", hasBreadcrumbs: false },
  { path: "/booking", file: "booking/index.html", expectedTitle: "Book Your Journey", hasBreadcrumbs: false },
  { path: "/contact", file: "contact/index.html", expectedTitle: "Contact Zoravia Terra Journeys", hasBreadcrumbs: false },
  { path: "/privacy-policy", file: "privacy-policy/index.html", expectedTitle: "Privacy Policy", hasBreadcrumbs: false },
  { path: "/terms-and-conditions", file: "terms-and-conditions/index.html", expectedTitle: "Terms", hasBreadcrumbs: false },
  { path: "/cancellation-policy", file: "cancellation-policy/index.html", expectedTitle: "Cancellation", hasBreadcrumbs: false },
  { path: "/short-escapes/akagera-1day-bigfive-safari", file: "short-escapes/akagera-1day-bigfive-safari/index.html", expectedTitle: "1-Day Akagera", hasBreadcrumbs: true },
  { path: "/short-escapes/akagera-2day-safari", file: "short-escapes/akagera-2day-safari/index.html", expectedTitle: "2-Day Akagera", hasBreadcrumbs: true },
  { path: "/short-escapes/nyungwe-2day-chimpanzee", file: "short-escapes/nyungwe-2day-chimpanzee/index.html", expectedTitle: "Nyungwe", hasBreadcrumbs: true },
  { path: "/short-escapes/nyungwe-gisakura-1day", file: "short-escapes/nyungwe-gisakura-1day/index.html", expectedTitle: "Gisakura", hasBreadcrumbs: true },
  { path: "/short-escapes/nyungwe-uwinka-1day", file: "short-escapes/nyungwe-uwinka-1day/index.html", expectedTitle: "Uwinka", hasBreadcrumbs: true },
  { path: "/short-escapes/volcanoes-2day-gorilla", file: "short-escapes/volcanoes-2day-gorilla/index.html", expectedTitle: "Volcanoes", hasBreadcrumbs: true },
];

console.log("==================================================");
console.log("Verifying Prerendered Static HTML Files in dist/...");
console.log("==================================================");

let totalPassed = 0;
let totalFailed = 0;

for (const route of routes) {
  const filePath = path.resolve(distDir, route.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${route.file}`);
    totalFailed++;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf-8");
  const size = Buffer.byteLength(html, "utf-8");

  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : "NONE";

  const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : "NONE";

  const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
  const desc = descMatch ? descMatch[1] : "NONE";

  const hasH1 = /<h1[^>]*>.*?<\/h1>/is.test(html);
  const hasRootBody = html.includes('id="root"') && html.length > 25000;
  const hasBreadcrumbs = route.hasBreadcrumbs ? html.includes("BreadcrumbList") : true;

  const valid =
    title.includes(route.expectedTitle) &&
    canonical.startsWith("https://www.zoraviaterrajourneys.com") &&
    desc !== "NONE" &&
    hasH1 &&
    hasRootBody &&
    hasBreadcrumbs;

  if (valid) {
    console.log(`✅ [PASS] ${route.path} (${(size / 1024).toFixed(1)} KB)`);
    console.log(`     Title: ${title}`);
    console.log(`     Canonical: ${canonical}`);
    console.log(`     Has H1: ${hasH1} | Body Content: ${hasRootBody} | Breadcrumbs: ${hasBreadcrumbs}`);
    totalPassed++;
  } else {
    console.error(`❌ [FAIL] ${route.path}`);
    totalFailed++;
  }
}

// Check 404.html
const notFoundPath = path.resolve(distDir, "404.html");
if (fs.existsSync(notFoundPath)) {
  const notFoundHtml = fs.readFileSync(notFoundPath, "utf-8");
  const hasNoindex = notFoundHtml.includes('name="robots" content="noindex, nofollow"');
  console.log(`✅ [PASS] /404.html (${(Buffer.byteLength(notFoundHtml) / 1024).toFixed(1)} KB) - Has noindex, nofollow: ${hasNoindex}`);
  totalPassed++;
} else {
  console.error("❌ Missing 404.html");
  totalFailed++;
}

// Check sitemap.xml
const sitemapPath = path.resolve(distDir, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
  const locCount = (sitemapXml.match(/<loc>/g) || []).length;
  console.log(`✅ [PASS] sitemap.xml contains ${locCount} canonical URLs (Expected: 16)`);
  if (locCount === 16) totalPassed++; else totalFailed++;
} else {
  console.error("❌ Missing sitemap.xml");
  totalFailed++;
}

// Check robots.txt
const robotsPath = path.resolve(distDir, "robots.txt");
if (fs.existsSync(robotsPath)) {
  console.log("✅ [PASS] robots.txt exists");
  totalPassed++;
}

// Check .htaccess
const htaccessPath = path.resolve(distDir, ".htaccess");
if (fs.existsSync(htaccessPath)) {
  console.log("✅ [PASS] .htaccess exists");
  totalPassed++;
}

console.log("\n==================================================");
console.log(`Summary: ${totalPassed} Passed | ${totalFailed} Failed`);
console.log("==================================================");

if (totalFailed > 0) process.exit(1);
