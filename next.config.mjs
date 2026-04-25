/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/FretboardTrainer',
  // Add this to ensure CSS/JS files load from the correct subfolder
  assetPrefix: '/FretboardTrainer/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
