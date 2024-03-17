"use client";

import useGetPosts from "@/app/hooks/useGetPosts";
import Card from "./Card";

import styles from "@/styles/Main.module.scss";

export default function PostViewer() {
  const apiUrl = "http://localhost:3000/api/post";
  const { posts, isLoading } = useGetPosts(apiUrl);
  if (isLoading) return <div>로딩중...</div>;
  return (
    <div className={`${styles.gridContainer}`}>
      {posts.map((post) => (
        <Card key={post.id} data={post} />
      ))}
    </div>
  );
}
