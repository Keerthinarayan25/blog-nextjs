import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/blogpost";

//GET posts

export async function GET() {
  await dbConnect();
  const posts = await BlogPost.find({});
  return NextResponse.json(posts);
}

//POST 
export async function Post(req: Request) {
  await dbConnect();
  const {title, content} = await req.json();
  const newPost = await BlogPost.create({
    title,
    content,
  });
  return NextResponse.json(newPost, {status:201});
}