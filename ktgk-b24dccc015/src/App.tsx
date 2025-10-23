import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import { usePosts } from "./hooks/usePosts";

export default function App() {
  const postsHook = usePosts();

  return (
    <div className="app">
      <Navbar total={postsHook.posts.length}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostList {...postsHook} />} />
          <Route path="/posts" element={<PostList {...postsHook} />} />
          <Route path="/posts/create" element={<PostCreate {...postsHook} />} />
          <Route path="/create" element={<PostCreate {...postsHook} />} />
          <Route path="/posts/:id" element={<PostDetail {...postsHook} />} />
          <Route path="/posts/edit/:id" element={<PostEdit {...postsHook} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
