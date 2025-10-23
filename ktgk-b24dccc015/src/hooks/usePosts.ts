import { useState, useEffect } from "react";
import { Post } from "../types/Post";
import { SEED_POSTS } from "../data/seed";

const STORAGE_KEY = "ktgk_posts_v1";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setPosts(JSON.parse(raw));
        return;
      } catch {}
    }
    // nếu chưa có data thì seed
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_POSTS));
    setPosts(SEED_POSTS);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPost = (p: Post) => setPosts(prev => [p, ...prev]);
  const updatePost = (id: string, updated: Partial<Post>) =>
    setPosts(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
  const deletePost = (id: string) =>
    setPosts(prev => prev.filter(p => p.id !== id));

  const findById = (id: string) => posts.find(p => p.id === id);

  return { posts, addPost, updatePost, deletePost, findById, setPosts };
}
