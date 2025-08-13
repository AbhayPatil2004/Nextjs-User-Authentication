"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold">
        Welcome to Nextjs-Authentication-Project
      </h1>

      <Link href="/login" className="mt-4">Login User</Link>
      <Link href="/signup" className="mt-2">Signup User</Link>
      <Link href="/profile" className="mt-2">User Profile</Link>
    </div>

  );
}
