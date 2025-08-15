import PostList from "@/components/PostList";

// interface BlogPost {
//   _id: string;
//   title: string;
//   content: string;
// }

export default function Home() {


  return (
    <div  className="text-center pt-12 min-h-screen">
      <PostList />

    </div>
  );
}
