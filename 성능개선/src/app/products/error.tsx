"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  //이 콘솔은 클라이언트에 나옴
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* 사용자가 리렌더링 하게도 할수 있다. */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
