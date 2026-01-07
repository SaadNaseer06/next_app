/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/next_app",
  assetPrefix: "/next_app/",
};

export default nextConfig;
