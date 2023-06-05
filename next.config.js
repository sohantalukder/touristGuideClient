/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        customKey: "my-value",
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
