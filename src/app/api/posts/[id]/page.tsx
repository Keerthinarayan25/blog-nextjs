interface Pageprops{
  params:{
    id: string;
  }
}

async function getPostData(id:string){
  const  post = {
    title: `Details for Post ${id}`,
    content: `This is the full content for the blog post with the ID: ${id}. This data was fetched from the server based on the URL.`
  };
  
  return post;
}

export default async function PostPage({params}:Pageprops){
  const {id} = params;
  const post = await getPostData(id);
  return(
    <div>
    <h1 className="text-3xl capitalize font-bold">
      {post.title}
    </h1>
    <p className="whitespace-pre-wrap">{post.content}</p>
    </div>
  )
}
