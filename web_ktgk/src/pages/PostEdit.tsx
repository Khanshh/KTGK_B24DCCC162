import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostEdit = ({ posts, setPosts }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  const [form, setForm] = useState(post || null);

  if (!form) return <p>Không tìm thấy bài viết.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPosts(posts.map((p) => (p.id === form.id ? form : p)));
    alert("Cập nhật thành công!");
    navigate(`/posts/${form.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
      <h2 className="text-2xl font-bold">Chỉnh sửa bài viết</h2>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="text"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="text"
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
        rows={10}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="border p-2 w-full"
      />
      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Cập nhật</button>
        <button
          type="button"
          onClick={() => navigate(`/posts/${form.id}`)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostEdit;
