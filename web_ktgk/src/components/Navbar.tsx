import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-3">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        📝 Blog Manager
      </h1>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          Trang chủ
        </NavLink>
        <button
          onClick={() => navigate("/create")}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Viết bài
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
