import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";

//서버파일(데이터베이스)에 있는 제품의 리스트를 읽아와서, 그걸 보여줌
// export const revalidate = 3;

export default async function ProductsPage() {
  //제품 리스트 가져옴
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
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
