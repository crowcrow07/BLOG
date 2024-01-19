import Image from "next/image";

import Card from "./Card";

import styles from "@/styles/Main.module.scss";

export default function Main() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className={`${styles.contentsContainer}`}>
        <h2 className="my-6 pb-4 font-bold">개발 컨텐츠</h2>
        <div className={`${styles.gridContainer}`}>
          <Card />
          <div>Project</div>
          <div>Share</div>
          <div>학력 or 교육</div>
          <div>스터디</div>
          <div>지금까지 블로그 포스팅한것들</div>
        </div>
        <h2 className="mt-12 mb-8 pb-4 font-bold">일상 컨텐츠</h2>
        <div className={`${styles.gridContainer}`}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </main>
  );
}
