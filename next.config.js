/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
}

const withPWA = require("next-pwa")({
    dest: "public",
})

module.exports = withPWA(nextConfig)
