import { Post } from "../types/Post";

export const SEED_POSTS: Post[] = [
  {
    id: "1",
    title: "Giới thiệu React 18 và tính năng mới",
    author: "Nguyen Van A",
    thumbnail: "https://picsum.photos/seed/react/400/250",
    content: "React 18 mang đến nhiều cải tiến...".repeat(30),
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Hành trình ghé thăm Đà Lạt trong 3 ngày",
    author: "Tran Thi B",
    thumbnail: "https://picsum.photos/seed/dalat/400/250",
    content: "Đà Lạt luôn là lựa chọn tuyệt vời cho...".repeat(30),
    category: "Du lịch",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "3",
    title: "10 món ăn đường phố không thể bỏ lỡ",
    author: "Le Van C",
    thumbnail: "https://picsum.photos/seed/food/400/250",
    content: "Ẩm thực đường phố Việt Nam đa dạng và phong phú...".repeat(30),
    category: "Ẩm thực",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "4",
    title: "Làm sao để duy trì thói quen đọc sách",
    author: "Pham Thi D",
    thumbnail: "https://picsum.photos/seed/book/400/250",
    content: "Đọc sách giúp mở rộng kiến thức và phát triển bản thân...".repeat(30),
    category: "Đời sống",
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: "5",
    title: "Công cụ tăng tốc workflow cho lập trình viên",
    author: "Hoang Van E",
    thumbnail: "https://picsum.photos/seed/tool/400/250",
    content: "Các công cụ như Git, VSCode, và terminal...".repeat(30),
    category: "Công nghệ",
    createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
];
