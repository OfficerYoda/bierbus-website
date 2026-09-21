import { serve } from "bun";

const root = import.meta.dir;
const mime: Record<string, string> = {
  html: "text/html; charset=utf-8",
  css: "text/css",
  js: "text/javascript",
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  woff2: "font/woff2",
  ico: "image/x-icon",
};

serve({
  port: Number(process.env.PORT ?? 3000),
  async fetch(req) {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p === "/") p = "/overview/index.html";
    // ponytail: trailing-slash-redirect, damit relative Pfade (styles.css) in den Designs aufloesen
    else if (/^\/[1-6]$/.test(p))
      return Response.redirect(new URL(`${p}/`, req.url), 301);
    else if (/^\/[1-6]\/$/.test(p)) p = `/designs${p}index.html`;
    else if (/^\/[1-6]\//.test(p)) p = `/designs${p}`;
    const file = Bun.file(root + p);
    if (await file.exists()) {
      const ext = p.split(".").pop() ?? "";
      return new Response(file, { headers: { "content-type": mime[ext] ?? "application/octet-stream" } });
    }
    return new Response("404 – Hier ist nur Baustelle.", { status: 404 });
  },
});

console.log("BierBus läuft: http://localhost:3000 (Designs: /1 bis /6)");
