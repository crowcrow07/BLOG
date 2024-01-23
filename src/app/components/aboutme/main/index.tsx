import Card from "./Card";

import ImageUpload from "./test";

import styles from "@/styles/Main.module.scss";

interface Data {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  contents: string;
  tag: string;
  date: string;
  path: string;
}

interface ApiResponse {
  data: Data[];
}

export default async function Main() {
  const result = await fetch("http://localhost:3000/api");
  const data: ApiResponse = await result.json();

  return (
    <main className={`${styles.mainContainer}`}>
      <div className={`${styles.contentsContainer}`}>
        <h2 className="my-6 pb-4 font-bold">개발 컨텐츠</h2>
        <div className={`${styles.gridContainer}`}>
          {data &&
            data.data.map((item: Data) => <Card key={item.id} data={item} />)}
        </div>
        <h2 className="mt-12 mb-8 pb-4 font-bold">일상 컨텐츠</h2>
        <div className={`${styles.gridContainer}`}></div>
      </div>
      <ImageUpload />
    </main>
  );
}
