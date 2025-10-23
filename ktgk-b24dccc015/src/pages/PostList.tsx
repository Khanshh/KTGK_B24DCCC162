import React, { useMemo, useState } from "react";
import { Post } from "../types/Post";
import PostCard from "../components/PostCard";

interface Props {
  posts: Post[];
  deletePost: (id: string) => void;
  setPosts?: (p: Post[])=>void;
}

export default function PostList({ posts, deletePost }: Props) {
  const [q, setQ] = useState("");
  const filtered = useMemo(()=> posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase())), [posts, q]);

  return (
    <div>
      <div className="page-header">
        <h1>Danh sách bài viết</h1>
        <div>
          <input placeholder="Tìm kiếm theo tiêu đề..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
      </div>
      <div className="info">Tổng số bài viết: {posts.length}</div>

      <div className="grid">
        {filtered.map(p => (
          <PostCard key={p.id} post={p} onDelete={deletePost}/>
        ))}
      </div>

      {filtered.length === 0 && <p>Không có bài viết phù hợp.</p>}
    </div>
  );
}
