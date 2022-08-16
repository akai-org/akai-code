const { i18n } = require("./next-i18next.config");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/akai-code/" : "",
};

module.exports = nextConfig;
