"use client";
//클라이언트 컴포넌트에서 리다이렉트 시키는 것
import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      제품 페이지로 이동
    </button>
  );
}
