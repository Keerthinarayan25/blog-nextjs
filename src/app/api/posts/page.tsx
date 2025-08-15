// import dbConnect from "@/lib/dbConnect";
// import Link from "next/link";
import MyForm from "@/components/MyForm"

export default async function PostPage() {
  // const response = await fetch("https://dummyjson.com/posts");
  // const data = await response.json();
  return (

    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>

      <MyForm/>

      <ul>
        {/* {data.posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            {post.title}
          </li>


          // {
          //   posts.map((post) => (
          //     <li key={post.id} className="my-2">
          //       <Link href={`/src/app/api/posts/{post.id}`}{post.title}></Link>
          //     </li>
          //   ))
          // }
        ))} */}
      </ul>
    </div>
  )
}