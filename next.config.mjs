/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This must match your repository name exactly
  basePath: '/FretboardTrainer',
  // Ensures images and CSS load from the correct subfolder
  images: {
    unoptimized: true,
  },
  // Helps with routing on static hosts
  trailingSlash: true,
};

export default nextConfig;
