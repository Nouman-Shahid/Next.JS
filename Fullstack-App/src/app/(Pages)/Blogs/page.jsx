import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const blog = () => {
  const blogs = [
    {
      id: 1,
      src: "/image/blog-img/blog1.png",
      category: "Article",
      title: "10 interesting facts you need to hear....",
    },
    {
      id: 2,
      src: "/image/blog-img/blog2.jpg",
      category: "Blog",
      title: "How to be calm in every situation....",
    },
    {
      id: 3,
      src: "/image/blog-img/blog3.jpeg",
      category: "Blog",
      title: "Programming Languages 2024....",
    },
  ];

  return (
    <main className="flex flex-col  items-start w-screen h-screen p-14 lg:flex-row  ">
      <div className="flex flex-wrap items-center space-x-24 space-y-10">
        <div className="flex flex-col w-[25vh] space-y-4">
          <h1 className="text-gray-200 text-[5vh] font-semibold ">
            Articles and blogs
          </h1>
          <h1 className="text-gray-300 text-[1.5vh]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim culpa
            voluptatibus distinctio minus alias quas earum labore, error aliquam
          </h1>
          <button className="text-gray-200 border border-gray-200 py-2 px-3 w-[45%] rounded-[1vh] flex items-center justify-between hover:bg-white hover:text-gray-800 transition duration-700 ">
            View all <IoIosArrowForward />
          </button>
        </div>

        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-[15vw] h-[40vh] space-y-4 rounded-[1vh] border border-blue-400 p-3"
          >
            <Image
              src={item.src}
              alt="image"
              width={290}
              height={100}
              loading="lazy"
            />
            <h1 className="text-gray-200 text-[2vh]">{item.category}</h1>
            <h1 className="text-gray-200 text-[2vh]">{item.title}</h1>
            <Link href="/Blogs/post">
              <button className="text-gray-200 border text-[1.5vh] border-gray-200 py-2 px-3 w-[50%] rounded-[1vh] flex items-center justify-between hover:bg-white hover:text-gray-800 transition duration-700 ">
                Read more <IoIosArrowForward />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default blog;
