import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";
import next from "next/types";

//서버파일(데이터베이스)에 있는 제품의 리스트를 읽아와서, 그걸 보여줌
//revalidate = html새로 만듬
// export const revalidate = 3; //3초마다 revalidate돼게 만든다(ISR)

export default async function ProductsPage() {
  //제품 리스트 가져옴
  const products = await getProducts();

  //서버컴포넌트에서도 패치 사용할수 있다.
  // const res = await fetch("https://meowfacts.herokuapp.com",{
  //   next: {revalidate :3}, //위에 쓰는 대신에 이렇게 쓸수 있다. 0으 로하면 SSR처럼 된다.(요청할때마다 revalidate)
  // next 대신에 cache 옵션써도 된다.
  //cache:'' (디폴트값으로 하면 영원히 캐쉬되기 때문에 SSG처럼 행동한다.)
  //cache:'no-store'(SSR처럼 행동한다.)
  // });
  // revalidate를 쓰지않으면, 처음 빌드될때 딱 처음만 패치가 일어나기 때문에, 아무리 리렌더링시켜도 바뀌지 않는다.
  // const data = await res.json();
  // const fetchText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {/* map안에서도 구조분해할당 할수 있다. */}
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* <article>{fetchText}</article> */}
      {/* 페이지에 있기는 하지만 중요하고 의미있는 컨텐츠가 아닌 경우, 나중에 렌더링돼도 상관없는 경우에는 CSR이 적합하다 */}
      <MeowArticle />
    </>
  );
}
