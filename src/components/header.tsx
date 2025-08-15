import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-gray-100 flex justify-between items-center p-4">
      <div>Logo</div>

      <ul className="flex items-center gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/api/posts">Create Post</Link></li>

      </ul>
    </div>
  );
}