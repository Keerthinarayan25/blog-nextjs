"use client";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

export default function  LoginPage (){
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) router.push("/dashboard");
    else alert("Login Failed");
  }

  return (
    <div className=" flex justify-center items-center max-w-md mx-auto bg-white p-6 rounded shadow">

      <form onSubmit={login} className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" />
      <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} className="w-full border p-2" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
    </div>
  );
}
