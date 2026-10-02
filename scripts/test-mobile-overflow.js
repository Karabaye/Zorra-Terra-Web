import { spawn } from "child_process";
import http from "http";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

const VIEWPORTS = [
  { name: "Narrow Mobile (iPhone SE)", width: 320, height: 568 },
  { name: "Small Mobile (iPhone 8)", width: 375, height: 667 },
  { name: "Standard Mobile (iPhone 14)", width: 390, height: 844 },
  { name: "Large Mobile (Pro Max)", width: 430, height: 932 },
  { name: "Tablet Portrait (iPad)", width: 768, height: 1024 },
  { name: "Tablet Landscape (iPad)", width: 1024, height: 768 },
  { name: "Laptop", width: 1366, height: 768 },
  { name: "Desktop (FHD)", width: 1920, height: 1080 }
];

const ROUTES = [
  "/",
  "/about",
  "/short-escapes",
  "/travel-with-us",
  "/booking",
  "/contact",
  "/gallery",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cancellation-policy",
  "/short-escapes/akagera-1day-bigfive-safari"
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function sendWs(ws, method, params = {}, id = 1) {
  return new Promise((resolve, reject) => {
    const msg = JSON.stringify({ id, method, params });
    const onMessage = (event) => {
      try {
        const res = JSON.parse(event.data);
        if (res.id === id) {
          ws.removeEventListener("message", onMessage);
          if (res.error) reject(res.error);
          else resolve(res.result);
        }
      } catch (err) {
        // ignore other messages
      }
    };
    ws.addEventListener("message", onMessage);
    ws.send(msg);
  });
}

async function run() {
  console.log("Starting Headless Chrome on port", PORT);
  const chrome = spawn(CHROME_PATH, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    "--remote-allow-origins=*",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars"
  ]);

  // Wait for Chrome to be ready
  await new Promise(r => setTimeout(r, 1500));

  try {
    const versionInfo = await fetchJson(`http://127.0.0.1:${PORT}/json/version`);
    console.log("Connected to Chrome:", versionInfo["Browser"]);

    const tabs = await fetchJson(`http://127.0.0.1:${PORT}/json/list`);
    const newTab = tabs.find(t => t.type === "page") || tabs[0];
    const wsUrl = newTab.webSocketDebuggerUrl;

    const WebSocket = globalThis.WebSocket;
    const ws = new WebSocket(wsUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    console.log("WebSocket connected. Starting viewport overflow audit...\n");

    let totalTests = 0;
    let failedTests = 0;

    for (const vp of VIEWPORTS) {
      console.log(`=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);

      // Set device metrics
      await sendWs(ws, "Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.width < 768
      }, 100);

      for (const route of ROUTES) {
        totalTests++;
        const url = `http://localhost:5173${route}`;
        
        // Navigate
        await sendWs(ws, "Page.navigate", { url }, 200);
        // Wait for page to settle
        await new Promise(r => setTimeout(r, 600));

        // Evaluate overflow
        const evalRes = await sendWs(ws, "Runtime.evaluate", {
          expression: `(() => {
            const docWidth = document.documentElement.scrollWidth;
            const winWidth = window.innerWidth;
            const overflow = docWidth > winWidth;
            
            let overflowingElements = [];
            if (overflow) {
              const all = document.querySelectorAll('*');
              for (const el of all) {
                const rect = el.getBoundingClientRect();
                if (rect.right > winWidth + 1) {
                  overflowingElements.push(el.tagName + (el.className ? '.' + el.className.split(' ').slice(0, 2).join('.') : ''));
                  if (overflowingElements.length >= 3) break;
                }
              }
            }

            return {
              docWidth,
              winWidth,
              overflow,
              overflowingElements
            };
          })()`,
          returnByValue: true
        }, 300);

        const result = evalRes.result?.value;
        if (!result) {
          console.log(`  ❌ ${route}: Evaluation failed`);
          failedTests++;
          continue;
        }

        if (result.overflow) {
          console.log(`  ❌ OVERFLOW on ${route}: docWidth=${result.docWidth}px, innerWidth=${result.winWidth}px (+${result.docWidth - result.winWidth}px)`);
          if (result.overflowingElements.length > 0) {
            console.log(`     Culprits: ${result.overflowingElements.join(", ")}`);
          }
          failedTests++;
        } else {
          console.log(`  ✅ ${route.padEnd(42)} OK (docWidth=${result.docWidth}px / ${result.winWidth}px)`);
        }
      }
      console.log("");
    }

    console.log("==========================================");
    console.log(`Audit Summary: ${totalTests - failedTests} Passed | ${failedTests} Failed out of ${totalTests} viewport-route combinations.`);
    console.log("==========================================");

    ws.close();
    chrome.kill();
    process.exit(failedTests > 0 ? 1 : 0);

  } catch (err) {
    console.error("Test error:", err);
    chrome.kill();
    process.exit(1);
  }
}

run();
