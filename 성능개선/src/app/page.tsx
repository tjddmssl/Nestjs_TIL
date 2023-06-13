import Image from "next/image";
import os from "os"; // 노드 APIs
import Counter from "@/components/Counter";

export default function Home() {
  console.log("안녕! - 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
      {/* 외부경로의 이미지를 사용할때는 width, height를 꼭 지정해줘야하고, next.config.js 에 지정을 해줘야 한다. */}
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
