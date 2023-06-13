import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
//variable fonts ⇒ 최상위 레이아웃 폴더에서 사용하는게 좋다
import { Open_Sans } from "@next/font/google";
import { Nanum_Gothic } from "@next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

//Nanum_Gothic은 variable fonts가 아니다
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

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
    //폰트 사용하는 방법
    <html lang="en" className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          {/* 태그별로 다른 폰트를 사용할수 있다 */}
          <h1 className={gothic.className}>Demo Note</h1>
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
