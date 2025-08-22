"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import UserMenu from "./userMenu";

export default function Header() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  return (
    <div className="border-b border-gray-100 flex justify-between items-center p-4">
      <div>
        <Link href="/">BLOG</Link>
      </div>

      <ul className="flex items-center gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts/create">Create</Link></li>
      </ul>
      <div>
        {
          isPending ? null : session?.user ? (
            <UserMenu user={session?.user} />
          ) : (
            <div className="flex gap-2">
              <Button className="cursor-pointer" onClick={() => router.push("/auth/login")}>
                Login
              </Button>
              <Button className="cursor-pointer" onClick={() => router.push("/auth/signup")}>
                sign up
              </Button>
            </div>

          )
        }


      </div>
    </div>
  );
}
