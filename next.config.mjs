/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/FretboardTrainer',
  assetPrefix: '/FretboardTrainer/', 
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
