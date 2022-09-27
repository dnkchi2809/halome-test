/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// next.config.js
const withVideos = require("next-videos");

module.exports = withVideos();
