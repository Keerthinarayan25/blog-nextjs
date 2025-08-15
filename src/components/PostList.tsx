import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/blogpost";
import Link from "next/link";

async function getPosts() {
  await dbConnect();

  try {
    const posts = await BlogPost.find({});
    console.log("Fetched posts:", posts);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:",error);
    return [];
  }
}


export default async function  PostList() {
  const posts = await getPosts();
  return(
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id.toString()} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <div>{post.content}</div>
            </div>
            <div className="flex gap-2">
              <Link href="/">Edit</Link>
            </div>
          </div>
        ))
      ):(
        <p>Posts not found</p>
      )}
    </div>
  )
}