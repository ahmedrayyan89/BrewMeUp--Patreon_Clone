"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center h-16 px-6 shadow-md">
      <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-500">BrewMeUp</Link>
      
      <ul className="flex gap-6 items-center">
        <li>
          <Link href="/HomePage"className="hover:text-blue-300 transition cursor-pointer">HomePage</Link>
        </li>

        <li>
          <Link href="/explore" className="hover:text-blue-300 transition cursor-pointer">Explore</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-300 transition">About</Link>
        </li>
        {session ? (
          <>
            <li>
              <Link href="/dashboard">
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium transition"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition">
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
