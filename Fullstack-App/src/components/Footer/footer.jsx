"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const footer = () => {
  const icons = [
    {
      path: "/image/icons-img/fb.png",
    },
    {
      path: "/image/icons-img/insta.png",
    },
    {
      path: "/image/icons-img/x.png",
    },
    {
      path: "/image/icons-img/li.png",
    },
    {
      path: "/image/icons-img/yt.png",
    },
  ];

  return (
    <footer className="flex flex-col w-screen h-36  justify-between px-10 space-y-4 items-center ">
      <hr className="w-[95%] h-1 bg-gray-500 border-none m-auto " />

      <div className="flex flex-col justify-between w-[90%]  items-center md:flex-row md:space-x-5">
        <p className="text-gray-300">EchoPages @All rights are reserved</p>
        <div className="flex items-center">
          <p className="text-gray-300 mx-4">You can follow us on : </p>
          <div className="flex space-x-2 my-4">
            {icons.map((items) => (
              <Image
                src={items.path}
                className="cursor-pointer hover:scale-125"
                width={30}
                height={70}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
