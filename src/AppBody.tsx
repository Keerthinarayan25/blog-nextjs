"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function AppBody({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";


  return (
    <SessionProvider>
      {!isAuthPage && <Header/>}
      {children}
      {!isAuthPage && <Footer/>}

    </SessionProvider>
  );
}