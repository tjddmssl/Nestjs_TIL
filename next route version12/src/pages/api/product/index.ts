import { getProducts, Product } from "@/service/products";
import type { NextApiRequest, NextApiResponse } from "next";

//예전 버전의 API라우트
//최신버전은 app에서 api를 사용할수 있다.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}
