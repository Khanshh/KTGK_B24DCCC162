import React from "react";
import { Post } from "../types/Post";
import { shortText } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}
export default function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();
  const handleDelete = () => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) onDelete(post.id);
  };
  return (
    <div className="card">
      <img src={post.thumbnail} alt={post.title} className="thumb"/>
      <div className="card-body">
        <h3>{post.title}</h3>
        <div className="meta">By {post.author} • {new Date(post.createdAt).toLocaleDateString()}</div>
        <p>{shortText(post.content, 100)}</p>
        <div className="card-actions">
          <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
          <button className="danger" onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
