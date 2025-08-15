"use server";

import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/blogpost";
import { revalidatePath } from "next/cache";

export async function CreatePost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title || !content) {
      throw new Error("Title and content cannot be empty.");
    }

    await dbConnect();
    await BlogPost.create({ title, content });

    revalidatePath("/");
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; 
  }
}
