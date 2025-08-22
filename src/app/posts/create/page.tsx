import { Card, CardHeader, CardTitle,CardContent } from "@/components/ui/card";
import PostForm from "@/components/PostForm";


export default function CreatePostPage() {

  return (
    <main className="py-10">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Create New post
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PostForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


