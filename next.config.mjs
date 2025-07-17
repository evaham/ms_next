/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // static HTML export
  basePath: isGithubPages ? '/ms_next' : '',
  assetPrefix: isGithubPages ? '/ms_next/' : '',
  images: {
    unoptimized: true, // 이미지 최적화 기능 끄기 (next export 호환)
  },
};

export default nextConfig;