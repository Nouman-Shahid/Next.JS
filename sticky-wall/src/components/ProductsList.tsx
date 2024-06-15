"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Typewriter from "typewriter-effect";

interface Container {
  $id: string;
  title: string;
  description: string;
}

const ProductsList = () => {
  const [containers, setContainers] = useState<Container[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lightColors = ["#E2F0CB", "#D6E6F2", "#F4D6E6", "#F2E3D6", "#D6E6F4"];

  useEffect(() => {
    const fetchContainers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/container");
        if (!response.ok) {
          throw new Error("Failed to fetch Containers");
        }
        const data = await response.json();
        setContainers(data);
      } catch (error) {
        console.error(error); // Log error for debugging
        setError("Failed to load Containers");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContainers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/container/${id}`, { method: "DELETE" });
      setContainers((prevContainers) =>
        prevContainers.filter((item) => item.$id !== id)
      );
    } catch (error) {
      setError("Failed to delete");
    }
  };

  const getRandomLightColor = () => {
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[randomIndex];
  };

  return (
    <main className="flex flex-col items-center w-screen">
      <div className="flex justify-between items-center px-20 w-full mt-5">
        <div>
          <h1 className="text-[3vh] font-bold text-gray-400">Hi Numan,</h1>
          <h1 className="text-[5vh] font-bold text-gray-400">
            Welcome to Sticky Wall
          </h1>
          <h1 className="font-bold text-[2.5vh] text-gray-500">
            <Typewriter
              options={{
                strings: [
                  "Reminder: Take a deep breath and relax.",
                  "You are capable of more than you know.",
                  "Believe you can, and you're halfway there.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <Link href={"/addproducts"}>
          <button className="p-2 bg-green-200 text-gray-800 font-bold rounded-lg">
            Add Notes
          </button>
        </Link>
      </div>

      <div className="flex w-full py-10 px-20">
        <div className="overflow-x-auto w-full flex justify-center">
          {isLoading ? (
            <div className="text-2vh text-green-500 my-28">
              Fetching Data. Please Wait!
            </div>
          ) : containers.length > 0 ? (
            <div className="flex flex-wrap items-start px-4 w-full ">
              <Link href={"/addproducts"}>
                <div
                  style={{ backgroundColor: getRandomLightColor() }}
                  className="h-[30vh] w-[30vh] rounded-lg shadow-md  m-3 flex flex-col items-center justify-center"
                >
                  <IoMdAdd className="text-gray-700 size-[8vh] cursor-pointer" />
                </div>
              </Link>
              {containers.map((item) => (
                <>
                  <div
                    key={item.$id}
                    style={{ backgroundColor: getRandomLightColor() }}
                    className="h-[30vh] w-[30vh] rounded-lg shadow-md p-2 m-3 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="checkbox border-gray-300"
                      />
                      <div>
                        <div className="font-bold text-gray-800 ">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <div className="px-8 text-gray-500 font-bold">
                      {item.description}
                    </div>
                    <div className="flex  mt-2 space-x-2 justify-between items-center px-3 ">
                      <p className="flex text-gray-500 font-bold text-[1.5vh]">
                        15/06/2024
                      </p>
                      <div className="flex  mt-2 space-x-2 justify-end ">
                        <Link href={`/editproducts/${item.$id}`}>
                          <button className=" bg-green-600 p-2 text-gray-800 font-bold rounded-[50%]">
                            <MdEdit className="size-[2vh] text-gray-300" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(item.$id)}
                          className=" bg-red-500 p-2 text-gray-800 font-bold rounded-[50%]"
                        >
                          <MdDelete className="size-[2vh] text-gray-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex justify-center my-28">
              <div className="text-2vh text-red-500">No data found</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
