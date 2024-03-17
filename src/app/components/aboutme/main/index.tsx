import PostViewer from "./PostViewer";

import styles from "@/styles/Main.module.scss";

export default function Main() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className={`${styles.contentsContainer}`}>
        <h2 className="my-6 pb-4 font-bold">개발 컨텐츠</h2>
        <PostViewer />
        <h2 className="mt-12 mb-8 pb-4 font-bold">일상 컨텐츠</h2>
        <div className={`${styles.gridContainer}`}></div>
      </div>
    </main>
  );
}
