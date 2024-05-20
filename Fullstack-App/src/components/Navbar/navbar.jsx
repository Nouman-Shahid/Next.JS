"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Blogs",
      path: "/Blogs",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
  ];

  return (
    <nav className="flex w-screen h-auto bg-gray-800 justify-between px-10 py-4 items-center ">
      <div className="flex ">
        <Link href="/">
          <p className="font-mono text-[3vh] font-bold text-gray-300">
            FullStack
          </p>
        </Link>
      </div>

      <div className="flex space-x-4 items-center px-2">
        {links.map((item) => (
          <Link
            href={item.path}
            className={`py-1 px-3 rounded-[2vh] text-white ${
              pathname === item.path && "bg-gray-100 text-gray-800 font-bold"
            }`}
          >
            {item.title}
          </Link>
        ))}

        <button className="bg-blue-500 py-1 px-3 text-gray-100 font-bold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default navbar;
