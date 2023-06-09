//next에서 제공하는 Link를 import해서 사용할수 있다.
import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
