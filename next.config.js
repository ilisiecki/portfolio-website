/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
