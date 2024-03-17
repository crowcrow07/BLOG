import { useState, useEffect } from "react";

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

export default function useGetPosts(url: string) {
  const [posts, setPosts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const json: ApiResponse = await result.json();
        setPosts(json.data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getPosts();
  }, [url]);

  return { posts, isLoading };
}
