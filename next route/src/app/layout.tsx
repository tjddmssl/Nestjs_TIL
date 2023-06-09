//폴더안에 있는 모든 자식파일안에서 공유가능하다 ⇒ 예를 들어 헤더, 네브바, 사이드바 같은거
import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

//seo을 위해서
//레이아웃이나 페이지나 둘다 Metadata 만들수 있다.
//레이아웃에 만들면 자식요소들도 다 해당, 페이지에 만들면 그 페이지에만 적용
//뷰포트에 대한 메타데이터는 자동으로 생성

//정적인 Metadata
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
