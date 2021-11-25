const path = require("path");

const config = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")]
  },
  webpack5: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    REDUX_DEV_TOOL: process.env.REDUX_DEV_TOOL
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = config;
