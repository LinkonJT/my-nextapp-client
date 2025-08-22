"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null; // don't render dashboard until session is ready

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 w-full ">
        {/* sidebar */}
        <div className="col-span-3 bg-amber-300 min-h-screen p-4">
          <ul className="space-y-2">
            <li className="hover:bg-amber-200 hover:text-black p-2 font-bold rounded">
              <Link href="/dashboard">User</Link>
            </li>
            <li className="hover:bg-amber-200 hover:text-black p-2 font-bold rounded">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:bg-amber-200 hover:text-black p-2 font-bold rounded">
              <Link href="/dashboard/add-products">Add Products</Link>
            </li>
          </ul>
        </div>

        {/* Dashboard content */}
        <div className="col-span-9 p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
