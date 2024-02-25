import { useState, useEffect } from "react";
import Card from "./Card";

interface getData {
  id: number;
  title: string;
  subTitle: string;
  categoryId: number;
  content: string;
  thumbnail: string;
  //   tags: TagItem[];
}

export default function ManagePost() {
  useEffect(() => {
    const getPost = async () => {
      const result = await fetch("http://localhost:3000/api/post");
      const data = await result.json();
      console.log(data);
      setList(data.data);
    };

    getPost();
  }, []);

  const [list, setList] = useState<getData[]>([]);

  return (
    <div className="p-4">
      {list &&
        list.map((post: getData) => {
          return <Card key={post.id} post={post} />;
        })}
    </div>
  );
}
