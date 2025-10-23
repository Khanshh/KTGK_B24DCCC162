import { useParams, useNavigate, Link } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail = ({ posts, setPosts }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Không tìm thấy bài viết.</p>;

  const handleDelete = () => {
    if (confirm("Xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== post.id));
      navigate("/");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <img src={post.thumbnail} alt={post.title} className="w-full mb-3" />
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-600 mb-2">
        {post.author} - {post.date}
      </p>
      <p className="whitespace-pre-line">{post.content}</p>
      <div className="flex gap-3 mt-4">
        <button onClick={() => navigate(-1)} className="bg-gray-300 px-3 py-1 rounded">
          Quay lại
        </button>
        <Link
          to={`/posts/edit/${post.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Chỉnh sửa
        </Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">
          Xóa bài viết
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
