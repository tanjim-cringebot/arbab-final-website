/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Disable image optimization
    },
    output: 'export', // Set output to export for static export
};

export default nextConfig;
