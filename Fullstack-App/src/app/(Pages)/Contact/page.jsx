import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <main className="flex flex-col justify-evenly items-center w-screen h-auto p-14 lg:flex-row  ">
      <Image
        src="/image/page-img/contact.png"
        alt="Home Image"
        width={700}
        height={700}
      />
      <form
        action=""
        className="flex flex-col px-[4vh] justify-center space-y-6 "
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          className="py-4 px-3 w-[40vw] rounded-[1vh] bg-gray-800 text-white"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email Address"
          className="py-4 px-3  w-[40vw] rounded-[1vh] bg-gray-800 text-white"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Phone (Optional)"
          className="py-4 px-3  w-[40vw] rounded-[1vh] bg-gray-800 text-white"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="py-4 px-3 w-[40vw] rounded-[1vh] bg-gray-800 text-white"
        ></textarea>
        <button className="bg-blue-700 p-5 text-gray-200 font-bold  active:bg-blue-800 rounded-[0.5vh]">
          Submit
        </button>
      </form>
    </main>
  );
};

export default contact;
