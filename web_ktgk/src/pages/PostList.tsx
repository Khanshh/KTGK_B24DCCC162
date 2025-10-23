import { useState } from "react";
import { Post } from "../types/Post";
import PostCard from "../components/PostCard";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList = ({ posts, setPosts }: Props) => {
  const [search, setSearch] = useState("");

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Danh sách bài viết ({filtered.length})
      </h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
