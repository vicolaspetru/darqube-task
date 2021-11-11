require("dotenv").config();

module.exports = {
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
    },
    eslint: {
        dirs: ["pages", "misc", "components"], // Only run ESLint on the declared directories during production builds (next build)
    },
};
