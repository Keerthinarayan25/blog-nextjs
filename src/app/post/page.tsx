export default async function PostPage() {
  const response = await fetch('https://dummyjson.com/posts');
  const data  = await response.json();

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl font-bold mb-5">Post page</h1>
      <ul>
        {data.posts.map((post: {id: number, title: string}) =>(
          <li key={post.id} className="mb-3">
            <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">
            {post.title}</a>
          </li>
        ))}
      </ul> 
      
    </div>
  );
}