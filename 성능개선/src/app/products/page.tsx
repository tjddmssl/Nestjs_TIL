import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
// 넥스트.js 에서 이미지를 보여줄땐 이미지 태그를 쓰는게 아니라, 넥스트.js에서 제공해주는 Image를 임포트 해와서 사용한다.
// 더효율적으로 이미지를 최적화해서 보여준다.
import Image from "next/image";
import Link from "next/link";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 3;

export default async function ProductsPage() {
  // throw new Error(); error.tsx를 확인하고자 에러 던진것
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      {/* 이미지를 보여줄때 우선순위도 지정해줄수 있다.priority를 사용하면 제일 먼저 보여줄 이미지를 지정할수 있다 => 예를 들어 홈페이지의 배너같은 이미지..  */}
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
