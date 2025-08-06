"use client";
import { useEffect, useState } from "react";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/posts')
  })
  return (
    <div  className="text-center pt-12 min-h-screen">
      <h1 className="text-3xl capitalize font-bold mb-4">Home Page</h1>
      <p>Welcome to the home page!</p>

    </div>
  );
}
