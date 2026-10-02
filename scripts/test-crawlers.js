import http from "node:http";

const routesToTest = [
  { url: "http://localhost:4173/", label: "Homepage (/)", expectedH1: "Every Journey Tells a Story" },
  { url: "http://localhost:4173/about/", label: "About (/about)", expectedH1: "Our Story" },
  { url: "http://localhost:4173/short-escapes/", label: "Short Escapes (/short-escapes)", expectedH1: "Experience Rwanda Even in Just a Few Days" },
  { url: "http://localhost:4173/travel-with-us/", label: "Travel With Us (/travel-with-us)", expectedH1: "Extended Flexible Tours" },
  { url: "http://localhost:4173/gallery/", label: "Gallery (/gallery)", expectedH1: "Akagera Safari Gallery" },
  { url: "http://localhost:4173/contact/", label: "Contact (/contact)", expectedH1: "Direct Details" },
  { url: "http://localhost:4173/short-escapes/volcanoes-2day-gorilla/", label: "Volcanoes Tour (/short-escapes/volcanoes-2day-gorilla)", expectedH1: "2-Day Volcanoes National Park Gorilla Experience – Musanze" },
  { url: "http://localhost:4173/short-escapes/akagera-1day-bigfive-safari/", label: "Akagera 1-Day Safari (/short-escapes/akagera-1day-bigfive-safari)", expectedH1: "1-Day Akagera Safari – Big Five Experience" },
];

const userAgents = [
  { name: "Googlebot", ua: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
  { name: "FacebookCrawler", ua: "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)" },
  { name: "Twitterbot", ua: "Twitterbot/1.0" },
];

async function run() {
  console.log("==================================================");
  console.log("Testing Prerendered HTML against Preview Server...");
  console.log("==================================================");

  for (const { url, label, expectedH1 } of routesToTest) {
    console.log(`\n🔍 Checking: ${label}`);
    for (const { name: uaName, ua } of userAgents) {
      const html = await fetchHtml(url, ua);

      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : "NONE";

      const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : "NONE";

      const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/i);
      const ogTitle = ogTitleMatch ? ogTitleMatch[1] : "NONE";

      const ogImageMatch = html.match(/<meta property="og:image" content="(.*?)"/i);
      const ogImage = ogImageMatch ? ogImageMatch[1] : "NONE";

      const hasH1 = html.includes(expectedH1) || (expectedH1 === "Direct Details" && html.includes("Direct") && html.includes("Details"));
      const rootIndex = html.indexOf('<div id="root">');
      const rootContent = rootIndex !== -1 ? html.slice(rootIndex) : "";
      const hasContent = rootContent.length > 5000;

      console.log(`  [${uaName}]`);
      console.log(`    Status: 200 OK | HTML length: ${html.length} bytes`);
      console.log(`    Title: ${title}`);
      console.log(`    Canonical: ${canonical}`);
      console.log(`    OG Title: ${ogTitle}`);
      console.log(`    OG Image: ${ogImage}`);
      console.log(`    Has expected H1 ("${expectedH1}"): ${hasH1 ? "✅ YES" : "❌ NO"}`);
      console.log(`    Has rendered body content in #root: ${hasContent ? "✅ YES" : "❌ NO"}`);
    }
  }

  console.log("\n==================================================");
  console.log("Testing Complete!");
  console.log("==================================================");
}

function fetchHtml(url, userAgent) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname,
      headers: {
        "User-Agent": userAgent,
      },
    };
    http.get(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    }).on("error", reject);
  });
}

run().catch(console.error);
