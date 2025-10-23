import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostEdit from "./pages/PostEdit";
import PostForm from "./components/PostForm";
import { Post } from "./types/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Công nghệ AI thay đổi thế giới",
      author: "Nguyễn Văn A",
      thumbnail: "https://picsum.photos/400/200",
      content:
        "Trí tuệ nhân tạo đang dần thay đổi mọi lĩnh vực trong đời sống, từ y tế, giáo dục đến công nghiệp...",
      category: "Công nghệ",
      date: "2025-10-23",
    },
    {
      id: 2,
      title: "Khám phá Đà Lạt mùa thu",
      author: "Trần Thị B",
      thumbnail: "https://picsum.photos/400/201",
      content:
        "Đà Lạt vào thu đẹp như một bức tranh, với những cánh đồng hoa rực rỡ và không khí se lạnh dễ chịu...",
      category: "Du lịch",
      date: "2025-10-20",
    },
    // Thêm 3–4 bài viết khác
  ]);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/create" element={<PostForm setPosts={setPosts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
          <Route path="/posts/edit/:id" element={<PostEdit posts={posts} setPosts={setPosts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
