import styles from "@/styles/Main.module.scss";

export default function Main() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className={`${styles.contentsContainer}`}>
        <h2 className="text-5xl mb-6 font-bold">소제목이 들어갈듯</h2>
        <div className={`${styles.gridContainer}`}>
          <div>이력서</div>
          <div>Project</div>
          <div>Share</div>
          <div>학력 or 교육</div>
          <div>스터디</div>
          <div>지금까지 블로그 포스팅한것들</div>
        </div>
        <h2 className="text-5xl mt-6 font-bold">
          개발이랑 관련 없는 소제목 들어갈듯
        </h2>
      </div>
    </main>
  );
}
