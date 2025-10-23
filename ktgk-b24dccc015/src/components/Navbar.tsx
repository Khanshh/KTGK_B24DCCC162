import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface Props { total: number }

export default function Navbar({ total }: Props) {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-left" onClick={() => navigate("/")}>
        <div className="logo">MyBlog</div>
      </div>
      <div className="nav-center">
        <NavLink to="/" end className={({isActive})=> isActive ? "active-link" : ""}>Trang chủ</NavLink>
        <NavLink to="/posts" className={({isActive})=> isActive ? "active-link" : ""}>Bài viết</NavLink>
      </div>
      <div className="nav-right">
        <span className="total">Tổng: {total}</span>
        <button className="btn" onClick={() => navigate("/posts/create")}>Viết bài</button>
      </div>
    </nav>
  );
}
