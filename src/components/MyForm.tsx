import { CreatePost } from "@/app/actions/route";

export default function MyForm() {
  return (
    <form action={CreatePost} className="flex flex-col gap-4">
      <input 
        type="text" 
        name="title" 
        placeholder="Title" 
        className="border border-slate-500 px-8 py-2" 
      />
      <textarea 
        name="content" 
        placeholder="Content" 
        className="border border-slate-500 px-8 py-2"
      ></textarea>
      <button 
        type="submit" 
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Post
      </button>
    </form>
  );
}
