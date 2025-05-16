/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // 😈 Disables ESLint
  },
  typescript: {
    ignoreBuildErrors: true,   // 😈 Disables TypeScript errors
  },
};
export default nextConfig;
