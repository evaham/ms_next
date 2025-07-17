/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
    output: 'export', // 반드시 static export 설정
    basePath: isGithubPages ? '/ms_next' : '',
    assetPrefix: isGithubPages ? '/ms_next/' : '',
    images: {
      unoptimized: true, // next/image 최적화 비활성화 (필수!)
    }
};

export default nextConfig;
