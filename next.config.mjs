/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/ipinfo",
            destination: "https://ipinfo.io/json",
          },
         
        ];
      },
};

export default nextConfig;
