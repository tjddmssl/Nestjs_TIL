//제품에 관한걸 가져오는 파일..
//중복돼는 코드를 함수로 만들어 둠
import path from "path";
//promises를 fs로 그냥 지정한것
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  //join(...paths: string[]): string;
  //process.cwd() method returns the current working directory of the Node.js process.
  //파일경로를 지정해줌
  const filePath = path.join(process.cwd(), "data", "products.json");

  // Asynchronously reads the entire contents of a file.
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  //arr.find()주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
  return products.find((item) => item.id === id);
}
