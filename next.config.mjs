/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const sitemap = require("next-sitemap");

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
