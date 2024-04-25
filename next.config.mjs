/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/articles/:id*',
            destination: '/articles'
          }
        ]
      }
};

export default nextConfig;
