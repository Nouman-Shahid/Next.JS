"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const home = () => {
  return (
    <main className="flex flex-col justify-evenly items-center w-screen h-auto p-14 lg:flex-row  ">
      <div className="flex flex-col px-[4vh] justify-center space-y-24 ">
        <h1 className="text-white font-bold text-[5vh] xl:text-[6vh]  italic w-[80vh]">
          Welcome to our blogging world, where words come alive...
        </h1>
        <div className="text-blue-400 text-[3.5vh] italic font-sans">
          <Typewriter
            options={{
              strings: [
                "Let our words paint pictures in your mind.",
                "Discover stories that spark your imagination.",
                "Words come alive here. Dive in!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="flex space-x-5 text-[1.5vh] ">
          <Link href="/Blogs">
            <button className="bg-blue-700 p-5 text-gray-100 font-bold  active:bg-blue-800 rounded-[0.5vh]">
              Create Blog
            </button>
          </Link>
          <button className="bg-gray-100 p-5 text-gray-800 font-bold  active:bg-gray-300 rounded-[0.5vh]">
            See Plans
          </button>
        </div>

        <Image
          src="/image/icons-img/brands.png"
          alt="brands"
          height={700}
          width={700}
          className="cursor-pointer"
        />
      </div>

      <Image
        src="/image/page-img/hero.gif"
        alt="Home Image"
        width={700}
        height={700}
      />
    </main>
  );
};

export default home;
