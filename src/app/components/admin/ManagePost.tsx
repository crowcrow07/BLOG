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

interface ManagePostProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setEditPostData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ManagePost({
  setPage,
  setEditPostData,
}: ManagePostProps) {
  useEffect(() => {
    const getPost = async () => {
      const result = await fetch("http://localhost:3000/api/post");
      const data = await result.json();
      console.log(data);
      setPosts(data.data);
    };

    getPost();
  }, []);

  const [posts, setPosts] = useState<getData[]>([]);

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-4">
      {posts &&
        posts.map((post: getData) => {
          return (
            <Card
              key={post.id}
              post={post}
              onDelete={deletePost}
              setPage={setPage}
              setEditPostData={setEditPostData}
            />
          );
        })}
    </div>
  );
}
