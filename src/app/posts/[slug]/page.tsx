import { notFound } from "next/navigation";

async function PostDetailsPage({
  params,
}:{
  params:Promise<{slug:string}>;
}) {
  const {slug} = await params;
  const post = await getPostBySlug(slug);

  if(!post){
    notFound();
  }
  return (
    <main>
      <div>
        
      </div>
    </main>
  )
}
