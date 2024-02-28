"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

import styles from "@/styles/Main.module.scss";

interface Data {
  id: number;
  categoryId: number;
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  thumbnail: string;
}

interface ApiResponse {
  data: Data[];
}

export default function PostViewer() {
  const [posts, setPosts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const result = await fetch("http://localhost:3000/api/post");
        const json: ApiResponse = await result.json();
        setPosts(json.data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className={`${styles.gridContainer}`}>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        posts.map((post) => <Card key={post.id} data={post} />)
      )}
    </div>
  );
}
