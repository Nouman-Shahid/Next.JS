"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const home = () => {
  return (
    <main className="flex justify-between items-center w-screen h-auto px-4 ">
      <div className="flex flex-col px-[4vh] justify-center space-y-32">
        <h1 className="text-white text-[7vh] w-[80%] italic">
          Welcome to our blogging world, where words come alive...
        </h1>
        <p className="text-red-400 text-[4vh] italic font-sans">
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
        </p>

        <div className="flex space-x-10 ">
          <button className="bg-blue-700 p-3 text-gray-100  hover:scale-110 rounded-[1vh]">
            Create Your Blog
          </button>
          <button className="bg-gray-100 p-3 text-gray-800  hover:scale-110 rounded-[1vh]">
            See Plans
          </button>
        </div>
      </div>

      <Image src="/image/page-img/hero.gif" width={700} height={700} />
    </main>
  );
};

export default home;
