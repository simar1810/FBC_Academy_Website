/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/app", destination: "/download" },
      { source: "/app/:path*", destination: "/download/:path*" },
    ];
  },
};

export default nextConfig;
