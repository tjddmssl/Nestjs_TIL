//app폴더외에도 폴더마다 만들고 싶은곳에 만들수 있다
//폴더안에 있는 모든 자식파일안에서 공유가능하다 ⇒ 예를 들어 헤더, 네브바, 사이드바 같은거
//중첩 레이아웃을 만들수 있다.
import { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css";

//동적인 Metadata
export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
