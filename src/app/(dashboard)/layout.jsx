import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 w-full ">
        {/* sidebar */}
        <div className="col-span-3 bg-gray-500">
          <ul>
            <li className="hover:bg-gray-300 hover:text-blue-500">
              <a href="/dashboard">User</a>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <a href="/dashboard/add-products">Add Products</a>
            </li>
          </ul>
        </div>
        {/* Dashboard content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
