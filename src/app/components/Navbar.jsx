"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
        <Link href="/" className="btn-ghost text-xl">
          <span className="font-bold text-2xl text-amber-300">Wall</span>Scape
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        {status === "loading" ? (
          <button className="btn loading btn-ghost">Checking...</button>
        ) : session ? (
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline"> {session.user?.name || session.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-sm md:btn-md  bg-amber-400 hover:text-black rounded-sm"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm md:btn-md  bg-amber-400 hover:text-black rounded-md"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
