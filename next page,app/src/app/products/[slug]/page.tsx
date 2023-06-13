/**동적 라우팅 : 골격은 그대로 두고 즉 페이지는 그대로이고(프리랜더링), url에 따라 필요한 것만 업데이트해줌(SSG)
 * 폴터안에 폴더 만들때 [원하는 키워드]넣어서 만들면 된다. 보통 [slug]를 많이 쓴다.
 */

import { log } from "console";
import { notFound } from "next/navigation";

type Props = {
  params: {
    //폴더 이름 // {slug: 'pants'} { slug: 'women' }
    slug: string;
  };
};

//동적으로 메타데이터 만드는 법
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

//products파일안에 즉 이 경로안에 알수 없는 경로가 들어오면 not-found.tsx를 호출한다.
export default function PantsPage({ params }: Props) {
  console.log(params);
  if (params.slug === "nothing") {
    //slug가 없다면 not-found.tsx를 호출
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

//원하는 경로에 한해서 미리 페이지를 만들어 준다. => generateStaticParams() 사용한다.
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  //params의 형태로 넣어준다.
  //products/pants, products/skirt 페이지가 SSG 형태로 만들어짐 즉 골격으로 만들어진 페이지는 프리렌더링 되어서 html이 있고, 그 html에 props로 JSON형태를 넘겨준다.
  return products.map((product) => ({
    slug: product,
  }));
}
