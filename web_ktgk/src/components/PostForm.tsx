import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostForm = ({ setPosts }: Props) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    thumbnail: "",
    content: "",
    category: "Khác",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.title.length < 10) return alert("Tiêu đề ít nhất 10 ký tự");
    if (form.author.length < 3) return alert("Tác giả ít nhất 3 ký tự");
    if (form.content.length < 50) return alert("Nội dung ít nhất 50 ký tự");

    setPosts((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
      },
    ]);

    alert("Đăng bài thành công!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
      <h2 className="text-2xl font-bold">Tạo bài viết mới</h2>

      <input
        type="text"
        placeholder="Tiêu đề"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Tác giả"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="URL ảnh thumbnail"
        value={form.thumbnail}
        onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
        className="border p-2 w-full"
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="border p-2 w-full"
      >
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <textarea
        placeholder="Nội dung bài viết"
        rows={10}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="border p-2 w-full"
      />
      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Đăng bài</button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;
