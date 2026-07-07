import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // ── Streaming support behind Nginx / Nginx Proxy Manager ──────────────────
  // Next.js 16 self-hosting guide: reverse proxies must disable response
  // buffering for streaming (used by the Vercel AI SDK streamText responses).
  // This header tells Nginx to pass chunks through immediately.
  // See: node_modules/next/dist/docs/01-app/02-guides/self-hosting.md
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
