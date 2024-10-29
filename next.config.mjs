/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.aviato.co",
            }
        ]
    }
};

export default nextConfig;
