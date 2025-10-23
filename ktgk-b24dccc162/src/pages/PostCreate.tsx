import React from "react";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
  addPost: (p: Post) => void;
}

export default function PostCreate({ addPost }: Props) {
  const navigate = useNavigate();
  const onSubmit = (p: Post) => {
    addPost(p);
    navigate("/");
  };
  return (
    <div>
      <h1>Tạo bài viết mới</h1>
      <PostForm onSubmit={onSubmit} onCancel={() => navigate("/")} submitText="Đăng bài"/>
    </div>
  );
}
