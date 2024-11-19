/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
    eslint: {
        ignoreDuringBuilds: true,
      },
    output:'export',
    images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: "utfs.io",
        },
    ]}
};

export default nextConfig;
