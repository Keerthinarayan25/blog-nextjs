"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="border-b border-gray-100 flex justify-between items-center p-4">
      <div>
        <Link href="/">LOGO</Link>
      </div>

      <ul className="flex items-center gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Create Post</Link></li>
      </ul>
      <div>
        <Button className="cursor-pointer" onClick={() => router.push("/auth/login")}>
          Login
        </Button>
      </div>
    </div>
  );
}
