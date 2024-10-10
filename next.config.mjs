/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/thebinaryhub/privacypolicy',
                destination: '/thebinaryhub', // Maps /new-url to /custom-folder
            },
            {
                source: '/thebinaryhub/BNRYMart/FAQ',
                destination: '/bnry-mart', // Maps /new-url to /custom-folder
            }
        ];
    },
};

export default nextConfig;  
