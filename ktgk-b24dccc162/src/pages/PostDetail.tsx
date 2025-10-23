import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  deletePost: (id: string) => void;
  findById: (id: string) => Post | undefined;
}

export default function PostDetail({ findById, deletePost }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return <div>Invalid</div>;
  const post = findById(id);
  if (!post) return <div>Không tìm thấy bài viết</div>;

  const onDelete = () => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      deletePost(post.id);
      navigate("/");
    }
  };

  return (
    <div className="detail">
      <img src={post.thumbnail} alt={post.title} className="detail-thumb"/>
      <h2>{post.title}</h2>
      <div className="meta">By {post.author} • {new Date(post.createdAt).toLocaleDateString()} • {post.category}</div>
      <div className="content">{post.content}</div>
      <div className="detail-actions">
        <button onClick={() => navigate(-1)}>Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button className="danger" onClick={onDelete}>Xóa bài viết</button>
      </div>
    </div>
  );
}
