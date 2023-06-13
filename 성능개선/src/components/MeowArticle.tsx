//클라이언트 컴포넌트에서는 꼭 'use client' 쓰기
"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article className={styles.article}>{text}</article>;
}
