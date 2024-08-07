"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode}) {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <>
      <Header />
      <div className='grid min-h-screen w-full md:grid-cols-[190px_1fr] lg:grid-cols-[250px_1fr]'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </>
  );
}
