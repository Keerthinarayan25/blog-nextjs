"use client";

import { useState } from "react";
import { DeletePostButtonProps } from "@/lib/types";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deletePost } from "@/app/actions/postActions";

export default function DeletePostButton({ postId }: DeletePostButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await deletePost(postId);

      if (res.success) {
        toast(res.message);
        router.push("/");
        router.refresh();
      } else {
        toast(res.message);

      }
    } catch (e) {
      console.error("Error Deleting  post:", e);
      toast("A error occured while deleting the post! Please trt again",);

    } finally {
      setIsDeleting(false);

    }
  }
  return (
    <>
      <Button
        disabled={isDeleting}
        onClick={handleDelete}
        variant="destructive"
        size="sm"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </>
  )
}
