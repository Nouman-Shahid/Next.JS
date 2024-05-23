import Image from "next/image";
import React from "react";

const posts = () => {
  return (
    <main className="flex flex-col w-screen p-4 h-screen items-center space-y-10">
      <div className="flex flex-row items-center w-[80%] justify-between space-y-1 px-10">
        <div className="flex items-center space-x-6">
          <Image
            src="/image/user-img/person_1.jpg.webp"
            width={70}
            height={70}
            className="rounded-[50%]"
          />
          <h1 className="text-white">James Clear</h1>
        </div>
        <h1 className="text-white">July 2, 2020</h1>
      </div>
      <div className="flex text-white flex-col items-center text-center w-[70%]">
        <h1 className="text-[5vh] font-bold">
          Your most unhappy customers are your greatest source of learning.
        </h1>
        <p className="text-[3vh] text-gray-300">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <Image
        src="/image/blog-img/blog1.png"
        alt="Image"
        width={1000}
        height={300}
      />
    </main>
  );
};

export default posts;
