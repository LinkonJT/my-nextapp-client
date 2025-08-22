"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
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
              className="btn bg-amber-400 hover:text-black rounded-sm"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn bg-amber-400 hover:text-black rounded-sm"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
