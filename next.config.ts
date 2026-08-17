import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // De AI Visibility Score is er per 17-08-2026 af. Allebei de adressen
      // stonden in Google en Bing, dus ze verwijzen door in plaats van te
      // eindigen op een 404.
      { source: "/score", destination: "/start", permanent: true },
      {
        source: "/kennis/ai-visibility-score-uitgelegd",
        destination: "/kennis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
