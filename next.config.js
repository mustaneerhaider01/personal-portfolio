/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "next-sanity",
    "sanity",
    "@sanity/ui",
    "@sanity/vision",
    "@mux/mux-player-react",
  ],
  experimental: {
    esmExternals: "loose",
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn-icons-png.flaticon.com",
      "partnerhelp.netflixstudios.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
