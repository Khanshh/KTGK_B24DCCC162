import React, { useState, useEffect } from "react";
import { Post, Category } from "../types/Post";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface Props {
  initial?: Partial<Post>;
  onCancel?: () => void;
  onSubmit: (p: Post) => void;
  submitText?: string;
}

export default function PostForm({ initial, onCancel, onSubmit, submitText = "Đăng bài" }: Props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initial?.title || "");
  const [author, setAuthor] = useState(initial?.author || "");
  const [thumbnail, setThumbnail] = useState(initial?.thumbnail || "");
  const [content, setContent] = useState(initial?.content || "");
  const [category, setCategory] = useState<Category>(initial?.category || "Khác");

  const [errors, setErrors] = useState<Record<string,string>>({});

  useEffect(()=> setErrors({}), [title, author, content]);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!title || title.trim().length < 10) e.title = "Tiêu đề bắt buộc, ít nhất 10 ký tự";
    if (!author || author.trim().length < 3) e.author = "Tác giả bắt buộc, ít nhất 3 ký tự";
    if (!content || content.trim().length < 50) e.content = "Nội dung bắt buộc, ít nhất 50 ký tự";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev?: React.FormEvent) => {
    ev?.preventDefault();
    if (!validate()) return;
    const createdAt = initial?.createdAt || new Date().toISOString();
    const id = (initial && initial.id) ? initial.id : uuidv4();
    const post: Post = { id, title, author, thumbnail: thumbnail || "https://picsum.photos/seed/default/400/250", content, category, createdAt };
    onSubmit(post);
    alert(submitText === "Đăng bài" ? "Đăng bài thành công!" : "Cập nhật thành công!");
    // navigate elsewhere handled by parent
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Tiêu đề
        <input value={title} onChange={e=>setTitle(e.target.value)} />
        {errors.title && <div className="err">{errors.title}</div>}
      </label>

      <label>Tác giả
        <input value={author} onChange={e=>setAuthor(e.target.value)} />
        {errors.author && <div className="err">{errors.author}</div>}
      </label>

      <label>URL ảnh thumbnail
        <input value={thumbnail} onChange={e=>setThumbnail(e.target.value)} placeholder="https://..." />
      </label>

      <label>Thể loại
        <select value={category} onChange={e=>setCategory(e.target.value as Category)}>
          <option> Công nghệ </option>
          <option> Du lịch </option>
          <option> Ẩm thực </option>
          <option> Đời sống </option>
          <option> Khác </option>
        </select>
      </label>

      <label>Nội dung
        <textarea rows={12} value={content} onChange={e=>setContent(e.target.value)} />
        {errors.content && <div className="err">{errors.content}</div>}
      </label>

      <div className="form-actions">
        <button type="submit">{submitText}</button>
        <button type="button" onClick={() => { onCancel?.(); navigate(-1); }}>Hủy</button>
      </div>
    </form>
  );
}
