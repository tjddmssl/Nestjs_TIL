//  특정한 요청이 왔을때, 공통적으로 수행해야할 것을 미들웨어로 만들수 있다.
//  즉 문지기 역할을 할수 있다.
//  예를 들어 로그인한 사람만 홈페이지의 모든 기능을 사용할수 있다, 또는 블랙리스트에 있는 유저인가 아닌가 등을 확인..

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중!@@");
  //만약 '/products/1004' 이 url로 오게 되면
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅함!");
    //'/products' 이 url로 리다이렉트 시킬거고, base url은 request.url) 즉 요청들어온 url를 그냥 쓸거야
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

//특정한 경로에서만 수행되도록 설정을 해줘야 기능에 좋다.
//설정안하면 모든 경로에서 수행돼서 웹성능에 좋지 않다.
export const config = {
  matcher: ["/products/:path*"],
};
