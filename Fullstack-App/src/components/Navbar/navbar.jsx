"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  let handleClick = () => {
    setIsClicked(!isClicked);
  };

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

  const sessions = true;
  const isAdmin = true;

  return (
    <>
      <nav className="flex w-screen h-auto bg-gray-800 justify-between px-10 py-4 items-center ">
        {/* Logo and Name */}
        <div className="flex ">
          <Link href="/">
            <p className="font-mono text-[3vh] font-bold text-gray-300">
              EchoPages
            </p>
          </Link>
        </div>

        {/* Links which are shown on screen > medium */}
        <div className=" hidden  space-x-4 items-center px-2 md:flex">
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

          {/* Sessions and toggleing between login and logout */}
          {sessions ? (
            <>
              {isAdmin && (
                <Link href="/Admin" className="text-white">
                  Admin
                </Link>
              )}
              <button className="bg-red-700 py-1 px-3 text-white font-bold hover:scale-110 rounded-[1vh]">
                Logout
              </button>
            </>
          ) : (
            <button className="bg-blue-700 py-1 px-3 text-gray-100 font-bold hover:scale-110 rounded-[1vh]">
              Login
            </button>
          )}
        </div>

        <div className="flex flex-col md:hidden">
          {isClicked ? (
            <RxCross1
              className="  text-white cursor-pointer active:scale-110"
              size="3vh"
              onClick={handleClick}
            />
          ) : (
            <FiMenu
              className=" text-white cursor-pointer active:scale-110"
              size="3vh"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>

      {/* Links which are shown on screen < medium */}
      {isClicked && (
        <div className=" flex flex-col  space-y-4 items-center px-2 md:hidden absolute right-0 top-24">
          {links.map((item) => (
            <Link
              href={item.path}
              className={`py-1 px-3 rounded-[2vh] text-white flex items-center flex-col ${
                pathname === item.path && "bg-gray-100 text-gray-800 font-bold"
              }`}
            >
              {item.title}
            </Link>
          ))}

          {/* Sessions and toggleing between login and logout */}
          {sessions ? (
            <>
              {isAdmin && (
                <Link href="/Admin" className="text-white">
                  Admin
                </Link>
              )}
              <button className="bg-red-700 py-1 px-3 text-white font-bold hover:scale-110 rounded-[1vh]">
                {" "}
                Logout{" "}
              </button>
            </>
          ) : (
            <button className="bg-blue-700 py-1 px-3 text-gray-100 font-bold hover:scale-110 rounded-[1vh]">
              Login
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default navbar;
