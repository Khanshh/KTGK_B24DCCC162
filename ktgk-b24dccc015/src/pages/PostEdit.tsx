import React from "react";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";
import { useParams, useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
  updatePost: (id: string, updated: Partial<Post>) => void;
  findById: (id: string) => Post | undefined;
}

export default function PostEdit({ updatePost, findById }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return <div>Invalid</div>;
  const post = findById(id);
  if (!post) return <div>Không tìm thấy bài viết</div>;

  const onSubmit = (p: Post) => {
    updatePost(id, p);
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <PostForm initial={post} onSubmit={onSubmit} onCancel={() => navigate(`/posts/${id}`)} submitText="Cập nhật"/>
    </div>
  );
}
