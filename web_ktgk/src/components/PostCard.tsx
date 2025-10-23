import { Link } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard = ({ post, onDelete }: Props) => {
  return (
    <div className="border p-3 rounded shadow">
      <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p className="text-sm text-gray-600">
        {post.author} - {post.date}
      </p>
      <p className="text-sm mt-2">{post.content.slice(0, 100)}...</p>
      <div className="flex justify-between mt-3">
        <Link to={`/posts/${post.id}`} className="text-blue-500">
          Đọc thêm
        </Link>
        <button onClick={() => onDelete(post.id)} className="text-red-500">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default PostCard;
