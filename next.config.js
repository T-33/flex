/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.freecodecamp.org',
            port: '',
            pathname: '/curriculum/css-photo-gallery/**',
          },
        ],
      },
}

module.exports = nextConfig
