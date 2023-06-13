import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

//products에 관련된 api니까 products폴더안에서 만들어줌
//최신버전은 app에서 api를 사용할수 있다.또 함수별로 get,post등을 사용할수 있다.
//http://localhost:3000/api/products 잘돼는걸 볼수 있다.
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
