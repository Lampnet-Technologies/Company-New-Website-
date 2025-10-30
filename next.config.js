/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // 👇 Add this custom Webpack override
  webpack: (config) => {
    // These mock empty modules for Mux so Sanity can’t import them
    config.resolve.alias["@mux/mux-player-react"] = false;
    config.resolve.alias["@mux/playback-core"] = false;
    config.resolve.alias["hls.js"] = false;

    // Optional: log for debug (can remove later)
    console.log("✅ Mux modules disabled in Webpack build");

    return config;
  },
};

module.exports = nextConfig;
