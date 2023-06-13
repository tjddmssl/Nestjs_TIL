/** @type {import('next').NextConfig} */
//next.config.js를 사용하는거면, 고정된 정적인 것으로 사용하겠다라는 것
//config파일 수정한거면, 아예 새로 start해야해
const nextConfig = {
  experimental: {
    appDir: true,
  },
  //외부 이미지 사용
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  //정적인 리다이렉트 사용
  //동적인 리다이렉트를 사용하고 싶다면, 해당 컴포넌트에서 next/navigation 에 있는 redirect를 사용하면 된다.
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", // 이 경로로 오면
        destination: "/products", //이 경로로 리다이렉트 시킬꺼야
        permanent: true, //영원히 리다이렉트 시킬꺼야 서치엔진아 그냥 캐쉬해도돼
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, //잠시만 리다이렉트 시킨것,
      },
    ];
  },
  //rewrites() : 내부적으로 복잡하고, 보안상으로 민감한 키가 들어있는 url이 있다면..? 다른 url로 덮어 쓸수 있다.
  //즉 외부에서는 덮어쓴 url를 대신 쓴다(예를 들어 북마크 할때도)
  async rewrites() {
    return [
      {
        source: "/sungeun",
        destination: "/about/me/sungeun", //이 url 대신 위 url를 쓴다.
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug", //이 url 대신 위 url를 쓴다.
      },
    ];
  },
};

module.exports = nextConfig;
