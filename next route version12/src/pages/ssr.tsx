import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

//버전13과 다른점 : 필요한 데이터를 props로 받는다. 페이지 컴포넌트는 클라이언트 사이드에서 실행,버전 13같이 컴포넌트 단위단위로 나뉜게 아니다.
//어떤함수에 따라 전달되는지에 따라 ssg,ssr이 나뉜다.
// getServerSideProps()사용시: 페이지 전체가 ssr처럼 행동한다.,  요청할때마다 html이 생성되기 때문에 데이터가 계속 업데이트
export default function SSGPage({ products }: Props) {
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

//이런 next.js에서 제공해주는 props를 만들기 위한 코드들만 서버에서 실행된다.그리고 props로 전달해줘야 한다.
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
