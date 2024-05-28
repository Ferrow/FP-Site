/** @type {import('next').NextConfig} */

import { withPlugins } from "next-compose-plugins";
import { sitemap } from "next-sitemap";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withPlugins([[sitemap]], nextConfig);
export default nextConfig;
