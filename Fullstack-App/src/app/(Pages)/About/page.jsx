import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <main className="flex justify-between items-center w-screen h-auto px-4 border border-red-800">
      <div className="flex flex-col">
        <h1 className="text-white text-[5vh] w-[60%]">
          Publish your passions, your way Create a unique and beautiful blog
          easily.
        </h1>
        <p className="w-[60%] text-white text-[2vh]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          corrupti sapiente iure nihil quibusdam. Minus quis hic expedita quasi
          dolor?
        </p>
      </div>
      <div className="flex w-[50%]">
        <Image
          src="/image/page-img/about.png"
          alt=""
          height={500}
          width={500}
        />
      </div>
    </main>
  );
};

export default about;
